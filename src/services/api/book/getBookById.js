import { fetcher } from "@/lib/fetcher";

export const getBookById = async (id) => {
  const response = await fetcher.get("/book/get?id=" + id);
  return response.data;
};
