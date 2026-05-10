import Header from "./header";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <LoginForm />
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default HomePage;
