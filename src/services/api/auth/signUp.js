import { fetcher } from "@/lib/fetcher";
import { AxiosError } from "axios";

export const signUp = async (username, email, password) => {
  const params = {
    username,
    email,
    password,
  };

  try {
    const response = await fetcher.post("/auth/register", params);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return new Error(err.response?.data?.Message);
    }
  }
};
