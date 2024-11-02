import { fetcher } from "@/lib/fetcher";

export const deleteBookById = async (id) => {
  const response = await fetcher.get("/book/delete?id=" + id);
  return response.data;
};
