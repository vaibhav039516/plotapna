import { supabase } from "./supabase";

export async function getOrCreateConversation(
  propertyId: string,
  buyerEmail: string,
  ownerEmail: string
) {
  const { data: existing, error: findError } = await supabase
    .from("conversations")
    .select("*")
    .eq("property_id", propertyId)
    .eq("buyer_email", buyerEmail)
    .eq("owner_email", ownerEmail)
    .maybeSingle();

  if (findError) {
    throw new Error(findError.message);
  }

  if (existing) {
    return existing;
  }

  const { data, error } = await supabase
    .from("conversations")
    .insert({
      property_id: propertyId,
      buyer_email: buyerEmail,
      owner_email: ownerEmail,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getMessages(conversationId: number) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function sendMessage(
  conversationId: number,
  senderEmail: string,
  receiverEmail: string,
  message: string
) {
  const { data, error } = await supabase
    .from("messages")
    .insert({
      conversation_id: conversationId,
      sender_email: senderEmail,
      receiver_email: receiverEmail,
      message,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}