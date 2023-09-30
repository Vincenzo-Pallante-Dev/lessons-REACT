import useSWR from "swr";

export function useGithubUsers() {
  const { data, error, mutate } = useSWR(`https://api.github.com/users`);

  function handleRefreshUsers() {
    mutate();
  }

  return {
    users: data,
    error,
    isLoading: !data && !error,
    onRefresh: handleRefreshUsers,
  };
}
