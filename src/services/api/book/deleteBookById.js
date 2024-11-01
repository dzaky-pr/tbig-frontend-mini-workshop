import { fetcher } from "@/lib/fetcher";

export const deleteBookById = async (id) => {
  const response = await fetcher.delete("book", id);
  return response.data;
};
