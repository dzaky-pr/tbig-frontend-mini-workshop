import { useCallback, useEffect, useState } from "react";

export const useFetcher = ({ fetchFn }) => {
  const [data, setData] = useState({
    data: [],
    message: null,
    status: null,
    success: null,
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (typeof fetchFn !== "function") {
      setError(new Error("fetchFn must be a function"));
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetchFn();
      setData(response);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, fetchFn: fetchData };
};
