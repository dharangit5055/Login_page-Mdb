import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { FaUserTie, FaLock } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";

function UserSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/signup", {
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
          <h1>Signup</h1>
          <div className="input-box">
            <input type="email" placeholder="Name" name="" id="" required />
            <FaUserTie className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="E-mail" name="" id="" required />
            <MdMarkEmailUnread className="icon" />
            {/* <FaUserTie /> */}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
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
            <>Already have an account!</>
            <Link to="/">
              <>Login here..</>
            </Link>
          </div>

          <button type="submit" onClick={submit}>Login</button>
        </form>
      </div>{" "}
    </div>
  );
}

export default UserSignUp;
