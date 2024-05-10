import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { FaUserTie, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-wrap">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="E-mail" name="" id="" required />
            <FaUserTie className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              name=""
              id=""
              required
            />
            <FaLock className="icon" />
          </div>

          {/* <div className="remember-forget">
                <label><input type='checkbox'/>Remember me</label>
            </div> */}

          <div>
            <>Don't have account!</>{" "}
            <Link to="/signup">
              <>signup here..</>
            </Link>
          </div>

          <button type="submit" onClick={submit}>
            Login
          </button>
        </form>
      </div>{" "}
    </div>
  );
}

export default UserLogin;
