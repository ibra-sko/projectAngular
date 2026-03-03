import { useEffect, useMemo } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import z from "zod";
import UserCard from "../../../components/UserCard";
import { PostContext } from "../../../contexts/PostContextProvider";
import useGetUser from "../../../hooks/api/jsonplaceholder/useGetUser";

const ownerIdSchema = z.number().int().positive();

const PostOwnerPage = () => {
  const { post } = useContext(PostContext);
  const { userId } = useParams();
  const navigate = useNavigate();

  const parsedUserId = useMemo(() => {
    const coerceSchema = z.coerce.number().int().positive();
    return coerceSchema.safeParse(userId);
  }, [userId]);

  const userQuery = useGetUser(parsedUserId.success ? parsedUserId.data : 0, parsedUserId.success);

  useEffect(() => {
    if (!post) {
      return;
    }

    if (!parsedUserId.success || !ownerIdSchema.safeParse(post.userId).success || parsedUserId.data !== post.userId) {
      navigate("/not-found", { replace: true });
      return;
    }

    if (userQuery.isError) {
      navigate("/not-found", { replace: true });
    }
  }, [navigate, parsedUserId, post, userQuery.isError]);

  if (!post || userQuery.isLoading) {
    return <p>Loading owner details...</p>;
  }

  if (!userQuery.data) {
    return null;
  }

  return <UserCard user={userQuery.data} />;
};

export default PostOwnerPage;
