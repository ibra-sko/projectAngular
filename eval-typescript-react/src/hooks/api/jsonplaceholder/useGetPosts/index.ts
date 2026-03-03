import { useQuery } from "@tanstack/react-query";
import { JsonPlaceholderApiUtils } from "..";
import { postsSchema } from "./data";

const fetchPosts = async () => {
  const response = await fetch(JsonPlaceholderApiUtils.postsUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: unknown = await response.json();
  return postsSchema.parse(data);
};

const useGetPosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

export default useGetPosts;
