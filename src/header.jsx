import { useNavigate, Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/", { replace: true })}>home</button>
      <button onClick={() => navigate("/login", { replace: true })}>
        login
      </button>
      <button onClick={() => navigate("/profile", { replace: true })}>
        profile
      </button>
      <Link to={"/profile"}>Profile</Link>
      <a href="/login">Login</a>
    </div>
  );
};

export default Header;
