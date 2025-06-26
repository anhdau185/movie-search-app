import { cookies } from "next/headers";

export async function getUserDataFromCookie() {
  const cookieStore = await cookies();
  const userInput = cookieStore.get("userInput");

  return userInput ?? null;
}
