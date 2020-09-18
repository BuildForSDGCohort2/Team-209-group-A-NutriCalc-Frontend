import React,{useState} from "react";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import FacebookIcon from "@material-ui/icons/Facebook";
import {provider, auth} from "../firebase";
import { actionTypes } from "../reducer"

const Login  = ()=> {
    const [redirect,setRedirect]=useState(null)
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [{user},dispatch]=useStateValue()

    const handleSubmit=(e)=>{
      // send data to auth API and dispatch SET_USER
      console.log(email, password);
      dispatch({
                type:actionTypes.SET_USER,
                user:{
                  email:email,
                  password:password
                }
            })
      setRedirect(true);
      
    }
    const handleLinkClick= (e)=>{
      
      dispatch({
                type:actionTypes.SET_USER,
                user:{name:"guest"}
            })

    }
    const handleLogin =(e)=>{
        e.preventDefault()
        console.log(user)
        // send data to facebook auth API and dispatch SET_USER
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
            const user = result.user;
            dispatch({
                type:actionTypes.SET_USER,
                user:user
            })
            if (user?.isNewUser){
                // send data to database
            }
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
            <Link to="/register" onClick={handleLinkClick}>dont have an account? Register here</Link>
          </form>
          <hr/>
          <div class="or-text d-flex align-items-center justify-content-center">
            <span>or</span>
          </div>
          <hr/>
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