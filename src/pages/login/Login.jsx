import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const { users } = useContext(UserContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.name.toLowerCase() === username.toLowerCase()
    );

    if (!foundUser) {
      alert("User not found");
      return;
    }

    login(foundUser);
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <h2>Bug Tracker Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <div className="logindetails">
        <p>
          Login with user name <span>admin</span> for full access.
        </p>
        <p>
          Login with user name <span>qa</span> for QA access.
        </p>
        <p>
          Login with user name <span>dev</span> for developer access.
        </p>
      </div>
    </div>
  );
};

export default Login;
