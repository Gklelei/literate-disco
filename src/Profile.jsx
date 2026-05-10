import { UseProfileContext } from "./context";

const Profile = () => {
  const { name, role } = UseProfileContext();
  return (
    <div>
      {name}
      {role}
    </div>
  );
};

export default Profile;
