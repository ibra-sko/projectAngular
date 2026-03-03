import type { Post } from "../../hooks/api/jsonplaceholder/useGetPosts/data";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
);

export default PostCard;
