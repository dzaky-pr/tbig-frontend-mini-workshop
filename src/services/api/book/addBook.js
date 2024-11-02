import { fetcher } from "@/lib/fetcher";

export const addBook = async (book) => {
  const response = await fetcher.post("/book/add", book);
  return response.data;
};
