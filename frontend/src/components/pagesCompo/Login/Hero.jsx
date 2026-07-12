import { useState } from "react";
import "../../../styles/SignUp.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/user");
};

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Welcome Back</h1>
        <p>Login to continue</p>

        <form className="signup-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="show-password">
            <div>
              <input
                type="checkbox"
                id="show"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="show"> Show Password</label>
            </div>

            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="login-link">
          Don't have an account? <a href="/signup">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;