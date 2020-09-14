import React,{useState} from "react";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import FacebookIcon from "@material-ui/icons/Facebook";
import {provider, auth} from "../firebase";
import { actionTypes } from "../reducer"

const Login  = (e)=> {
    const [redirect,setRedirect]=useState(null)
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [{},dispatch]=useStateValue()
    const handleSubmit=(e)=>{
      e.preventDefault();
      // send data to auth API and dispatch SET_USER
      console.log(email, password);
      setRedirect(true);
      
    }
    const handleLogin =(e)=>{
        e.preventDefault()
        // send data to facebook auth API and dispatch SET_USER
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
            const token = result.credential.accessToken;
            const user = result.user;
            dispatch({
                type:actionTypes.SET_USER,
                user:user
            })
        }).catch((error)=>{alert(error.message)})
        setRedirect(true)
        // if sign in with facebook or google there isno data and dispatchh SET_USER

            
    }
    if (redirect){
        return <Redirect to="/"/>
    }
    return (
      <div className="container">
        <div className="page-header">
          <h2>Sign In</h2>
        </div>
        <div className="form-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="emailField"
                className="form-control"
                id="emailInput"
                placeholder="your@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="passwordField"
                className="form-control"
                id="passwordInput"
                placeholder="enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary btn-sm btn-block"
            >
              Login
            </button>
            <Link to="/register">dont have an account? Register here</Link>
          </form>
          <hr />
          <h6 className="or">or</h6>
          <button
            type="button"
            onClick={handleLogin}
            className="btn btn-primary btn-sm btn-block"
            id="facebookBtn"
          >
             <span><FacebookIcon/> </span> SIGN IN WITH FACEBOOK
          </button>
        </div>
      </div>
    );
}

export default Login