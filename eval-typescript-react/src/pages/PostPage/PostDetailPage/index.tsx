import { useContext } from "react";
import PostCard from "../../../components/PostCard";
import { PostContext } from "../../../contexts/PostContextProvider";

const PostDetailPage = () => {
  const { post } = useContext(PostContext);

  if (!post) {
    return <p>Loading post details...</p>;
  }

  return <PostCard post={post} />;
};

export default PostDetailPage;
