import { fetcher } from "@/lib/fetcher";

export const editBook = async (book) => {
  const response = await fetcher.post("/book/update", book);
  return response.data;
};
