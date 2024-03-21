import React , { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from "../../context/auth";


const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate(); 
    const [auth , setAuth] = useAuth();


    // form function

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
            if(res && res.data.success){
                toast.success("Sign in successfully" , 8000);
                setAuth({
                  ...auth,
                  user: res.data.user,
                  token: res.data.token,
                });
                localStorage.setItem("auth" , JSON.stringify(res.data));                navigate("/");
            }
            else{
                toast.error(res.data.message)
            }
        }
        catch(e){
            console.log(e);
            toast.error('something went wrong');
        }
    }




  return (
    <Layout>
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value) }
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
