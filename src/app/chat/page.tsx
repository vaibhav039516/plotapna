"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  getMessages,
  getOrCreateConversation,
  sendMessage,
} from "@/lib/chat";

type Message = {
  id: number;
  conversation_id: number;
  sender_email: string;
  receiver_email: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

function ChatContent() {
  const searchParams = useSearchParams();

  const propertyId = searchParams.get("propertyId");
  const ownerEmail = searchParams.get("ownerEmail");
  const ownerName = searchParams.get("ownerName");
  const propertyTitle = searchParams.get("propertyTitle");

  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    mobile?: string;
  } | null>(null);

  const [conversationId, setConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("plotapna_current_user");

    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    } else {
      setError("Please log in before starting a chat.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!currentUser || !propertyId || !ownerEmail) {
      return;
    }

    if (currentUser.email === ownerEmail) {
      setError("You cannot start a chat with yourself.");
      setLoading(false);
      return;
    }

    async function loadConversation() {
      try {
        setLoading(true);
        setError("");

        const conversation = await getOrCreateConversation(
          propertyId!,
          currentUser!.email,
          ownerEmail!
        );

        setConversationId(conversation.id);

        const existingMessages = await getMessages(conversation.id);

        setMessages(existingMessages);
      } catch (err) {
        console.error(err);
        setError("Unable to load the chat. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadConversation();
  }, [currentUser, propertyId, ownerEmail]);

  useEffect(() => {
    if (!conversationId) {
      return;
    }

    const interval = setInterval(async () => {
      try {
        const latestMessages = await getMessages(conversationId);
        setMessages(latestMessages);
      } catch (err) {
        console.error(err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [conversationId]);

  const handleSend = async () => {
    if (!message.trim() || !currentUser || !conversationId || !ownerEmail) {
      return;
    }

    try {
      setSending(true);
      setError("");

      const newMessage = await sendMessage(
        conversationId,
        currentUser.email,
        ownerEmail,
        message.trim()
      );

      setMessages((previous) => [...previous, newMessage]);
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Message could not be sent.");
    } finally {
      setSending(false);
    }
  };

  if (!currentUser && !loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Login Required
          </h1>

          <p className="mt-3 text-gray-600">
            Please log in to contact the property owner.
          </p>

          <Link
            href="/login"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            PLOTAPNA
          </Link>

          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="overflow-hidden rounded-2xl bg-white shadow">
          <div className="border-b bg-white px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Chat about property
            </p>

            <h1 className="mt-1 text-lg font-bold text-gray-900">
              {propertyTitle || "Property"}
            </h1>

            <p className="text-sm text-gray-600">
              Owner: {ownerName || ownerEmail || "Property Owner"}
            </p>
          </div>

          <div className="h-[500px] overflow-y-auto bg-gray-50 p-5">
            {loading ? (
              <div className="flex h-full items-center justify-center text-gray-500">
                Loading chat...
              </div>
            ) : error ? (
              <div className="flex h-full items-center justify-center text-center text-red-600">
                {error}
              </div>
            ) : messages.length === 0 ? (
              <div className="flex h-full items-center justify-center text-center text-gray-500">
                <div>
                  <div className="text-4xl">💬</div>
                  <p className="mt-3 font-medium">
                    Start the conversation
                  </p>
                  <p className="mt-1 text-sm">
                    Ask the owner about price, availability or property visits.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((item) => {
                  const isMine =
                    item.sender_email === currentUser?.email;

                  return (
                    <div
                      key={item.id}
                      className={`flex ${
                        isMine ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                          isMine
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-900 shadow-sm"
                        }`}
                      >
                        <p className="text-sm">{item.message}</p>

                        <p
                          className={`mt-1 text-[10px] ${
                            isMine
                              ? "text-blue-100"
                              : "text-gray-400"
                          }`}
                        >
                          {new Date(item.created_at).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border-t bg-white p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <button
                onClick={handleSend}
                disabled={sending || !message.trim()}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {sending ? "..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ChatPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-gray-100">
          <p className="text-gray-500">Loading chat...</p>
        </main>
      }
    >
      <ChatContent />
    </Suspense>
  );
}