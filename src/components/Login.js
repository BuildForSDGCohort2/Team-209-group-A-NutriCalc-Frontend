import React,{useState, useEffect, useContext } from "react";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import StateContext from "../Context/stateContext";
import FacebookIcon from "@material-ui/icons/Facebook";
import {provider, auth} from "../firebase";
import { actionTypes } from "../Context/stateReducer"
import getLogin from "../API/getLogin"
import Cookies from "js-cookie";


const Login  = ()=> {
    const [redirect,setRedirect]=useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(null);
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const contextValue = useContext(StateContext);
    
    const { dispatch } = contextValue;
    const csrftoken = Cookies.get("csrftoken");

   async function handleSubmit(e) {
    // send data to auth API and dispatch SET_USER
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const result = await getLogin(data, csrftoken)
        .then((response) => {
          console.log(response);
           if (response.status === 200) {
            setUserLoggedIn(result.json());
            dispatch({
              type: actionTypes.SET_USER,
              payload: userLoggedIn,
            });
            setRedirect(true);
        }

          return response;
        })
        .catch((error) => {
          return error.message;
        });
     
      }
    
    catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
  }

    useEffect(()=>{
      
    },[])
    
    const handleLinkClick= (e)=>{
      const data={user:{name:"guest"}}
      dispatch({
                type:actionTypes.SET_USER,
                payload:data
            })

    }
    const handleLogin =(e)=>{
        // e.preventDefault()
        // send data to facebook auth API and dispatch SET_USER
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
            const user = result.user;
            console.log(user)
            dispatch({
                type:actionTypes.SET_USER,
                payload:user
            })
            if (!result?.additionalUserInfo.isNewUser){
                // send data to database
                alert("not newUser")
                return <Redirect to="/register"/>;
            }else{
              seeFailedResult(result)
            }
        }).catch((error)=>{
          console.log(error)
        // if sign in with facebook or google there isno data and dispatchh SET_USER       
    })
  }
    if(redirect){
        return <Redirect to="/"/>
    }
    return (
      <div className="container">
        <div className="page-header">
          <h2>Sign In to NutriCalc</h2>
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
              className="btn btn-success btn-sm btn-block"
            >
              Login
            </button>
            <Link to="/register" onClick={handleLinkClick}>dont have an account? Register here</Link>
          </form>
          <hr/>
          <div className="or-text d-flex align-items-center justify-content-center">
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

function seeFailedResult(result) {
  console.log(result);
}
