import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");

        toast.success("Sign in successfully", 8000);
      } else {
        toast.error(res.data.message);
      }
    } catch (e) {
      console.log(e);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout>

      <div className="row login-back container my-5 mx-auto">
        
      <div className="col">
      <div className="login">
        <h1>Sign In </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn text-white" style={{background: "rgb(230,0,35)"  }}>
            Sign In
          </button>
          <button
            type="submit"
            className="btn btn-transparent text-primary text-decoration-underline"
            onClick={() => {navigate(`/forgot-password`)}}
          >
            forgot password?
          </button>
        </form>
      </div>
      </div>
      <div className="col login">
        <img src="images/login-img.jpeg" alt="hvh" height={400} width={600}/>
      </div>

      </div>
    </Layout>
  );
};

export default Login;
