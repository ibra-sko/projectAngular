import { createContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../hooks/api/jsonplaceholder/useGetPosts/data";
import useGetPost from "../services/api/jsonplaceholder/useGetPost";
import { positiveIntIdSchema } from "../utils/id";

type PostContextType = {
  post: Post | null;
};

export const PostContext = createContext<PostContextType>({
  post: null,
});

const PostContextProvider = ({ children }: PropsWithChildren) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  const parsedPostId = positiveIntIdSchema.safeParse(postId);

  const postQuery = useGetPost(parsedPostId.success ? parsedPostId.data : 0, parsedPostId.success);

  useEffect(() => {
    if (!parsedPostId.success) {
      navigate("/not-found", { replace: true });
      return;
    }

    if (postQuery.isError) {
      navigate("/not-found", { replace: true });
      return;
    }

    if (postQuery.data) {
      setPost(postQuery.data);
    }
  }, [navigate, parsedPostId.success, postQuery.data, postQuery.isError]);

  const value = useMemo(
    () => ({
      post,
    }),
    [post],
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
