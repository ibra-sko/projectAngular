import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { PostContext } from "../../contexts/PostContextProvider";

const PostPage = () => {
  const { post } = useContext(PostContext);

  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <div>
      <nav>
        <Link to="detail">Post details</Link> | <Link to={`owner/${post.userId}`}>Post owner</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default PostPage;
