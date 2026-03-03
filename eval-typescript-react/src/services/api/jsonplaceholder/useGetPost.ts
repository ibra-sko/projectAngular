import { useQuery } from "@tanstack/react-query";
import { JsonPlaceholderApiUtils } from "../../../hooks/api/jsonplaceholder";
import { postSchema } from "../../../hooks/api/jsonplaceholder/useGetPosts/data";

const fetchPost = async (postId: number) => {
  const response = await fetch(`${JsonPlaceholderApiUtils.postsUrl}/${postId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  const data: unknown = await response.json();
  return postSchema.parse(data);
};

const useGetPost = (postId: number, enabled = true) =>
  useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
    enabled,
  });

export default useGetPost;
