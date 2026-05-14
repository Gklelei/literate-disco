import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await fetch(
          `http://localhost:3030/users?email=${email}&password=${password}`,
        );

        if (!response.ok) {
          alert("Login failed");
          return;
        }

        const data = await response.json();

        if (data.length === 0) {
          alert("Invalid credentials");
          return;
        }

        const user = data[0];

        console.log(user);

        localStorage.setItem("user", JSON.stringify(user));

        alert(`Welcome ${user.name}`);
      } else {
        const response = await fetch("http://localhost:3030/users", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (!response.ok) {
          alert("Register failed");
          return;
        }

        const data = await response.json();

        console.log(data);

        alert("Registered successfully");

        setName("");
        setEmail("");
        setPassword("");

        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <br />
        <br />

        {!isLogin && (
          <>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <br />
            <br />
          </>
        )}

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <br />
        <br />

        <button type="submit">{isLogin ? "Login" : "Register"}</button>

        <br />
        <br />

        {isLogin ? (
          <button type="button" onClick={() => setIsLogin(false)}>
            Switch to Register
          </button>
        ) : (
          <button type="button" onClick={() => setIsLogin(true)}>
            Switch to Login
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
