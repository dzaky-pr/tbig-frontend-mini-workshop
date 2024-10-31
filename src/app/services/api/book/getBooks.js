import { fetcher } from "@/lib/fetcher";

export const getBooks = async () => {
  const response = await fetcher.get("/book");
  console.log("response.data", response.data);
  return response.data;
};
