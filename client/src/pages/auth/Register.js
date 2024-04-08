import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res && res.data.success) {
        navigate("/login");
        toast.success("Registration successfully completed");
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
      <div className="register">
      <div className="row">
        <div className="col m-5 text-center">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="d-flex">
              <div className="m-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleInputName"
                  required
                />
              </div>
              <div className="m-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  required
                />
               
              </div>
            </div>

            <div className="d-flex">
              <div className="m-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Phone No.
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  id="exampleInputPhone"
                  required
                />
              </div>
              <div className="m-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="m-3">
                <label htmlFor="exampleInputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  id="exampleInputAddress"
                  required
                />
              </div>
              <div className="m-3">
                <label htmlFor="exampleInputAddress" className="form-label">
                  What is your favorite sports?
                </label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  id="exampleInputAnswer"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>
        <div className="col">
          {/* <img src="images/register-img.jpg" alt="" /> */}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
