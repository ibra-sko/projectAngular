import type User from "../../models/User";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => (
  <div>
    <h2>{user.name}</h2>
    <p>{user.username}</p>
    <p>{user.email}</p>
  </div>
);

export default UserCard;
