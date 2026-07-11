import { useState } from "react";
import "../../../styles/SignUp.css"

const Hero = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create Account</h1>
        <p>Join us today!</p>

        <form className="signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Profile-Pic</label>
            <input
              type="text"
              placeholder="Enter your profile picture URL"
              required
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              required
            />
          </div>

          <div className="show-password">
            <input
              type="checkbox"
              id="show"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show">Show Password</label>
          </div>

          <button type="submit">Create Account</button>
        </form>

        <div className="login-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;