import { useQuery } from "@tanstack/react-query";
import { JsonPlaceholderApiUtils } from "..";
import { userSchema } from "./data";

const fetchUser = async (userId: number) => {
  const response = await fetch(`${JsonPlaceholderApiUtils.usersUrl}/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const data: unknown = await response.json();
  return userSchema.parse(data);
};

const useGetUser = (userId: number, enabled = true) =>
  useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    enabled,
  });

export default useGetUser;
