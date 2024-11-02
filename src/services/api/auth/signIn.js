import { fetcher } from "@/lib/fetcher";
import { AxiosError } from "axios";

export const signIn = async (email, password) => {
  const params = {
    username: email,
    password: password,
  };

  try {
    const response = await fetcher.post("/auth/login", params);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.Message);
    }
  }
};
