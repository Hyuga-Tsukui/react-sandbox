import { useCallback } from "react";
import useSWR from "swr";

export const useUsers = () => {
  const fetcher = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return [
      { id: 1, name: "fuga" },
      { id: 2, name: "hoge" },
      { id: 3, name: "piyo" },
    ];
  }, []);

  const { data, error } = useSWR("api/users", fetcher);

  const create = useCallback(({ name }: { name: string }) => {
    // 作成のAPIを呼ぶなど
  }, []);

  return {
    users: data || [],
    isLoading: !data && !error,
    create,
  };
};
