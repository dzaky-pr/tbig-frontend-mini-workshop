"use server";

import { getAuthCookie } from "@/lib/cookie";
import { fetcher } from "@/lib/fetcher";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export const authStatus = async () => {
  try {
    const cookie = getAuthCookie(cookies());
    const response = await fetcher.get("/auth/status", {
      headers: { "Cache-Control": "no-store", Cookie: cookie },
    });
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) console.log("response.", err.response);
    return err;
  }
};
