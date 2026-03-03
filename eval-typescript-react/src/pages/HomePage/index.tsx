import { Link } from "react-router-dom";
import useGetPosts from "../../hooks/api/jsonplaceholder/useGetPosts";

const HomePage = () => {
  const postsQuery = useGetPosts();

  if (postsQuery.isLoading) {
    return <p>Loading posts...</p>;
  }

  if (postsQuery.isError) {
    return <p>Unable to load posts.</p>;
  }

  return (
    <ul>
      {postsQuery.data?.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}/detail`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
