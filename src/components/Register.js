import React,{ useState } from 'react'
import {  Link, Redirect } from "react-router-dom";

const Register= ()=>{
   const [email,setEmail]=useState("")
   const [password, setPassword] = useState("");
   const [confPassword, setconfPassword] = useState("");
   const [username, setUsername] = useState("");
   const [redirect,setRedirect]=useState(null)

   const handleSubmit= (e)=>{
     e.preventDefault()
    //  send info to AUTH API
     setRedirect(true)
   }
   if (redirect) {
     return <Redirect to="/" />;
   }
    return (
      <div>
        <div className="container">
          <div className="page-header">
            <h2>Sign Up </h2>
          </div>

          <div className="form-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="email address">Username</label>
                <input
                  type="email"
                  class="form-control"
                  id="usernameField"
                  placeholder="your username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
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
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="passwordConfirmField"
                  className="form-control"
                  id="passwordConfirmInput"
                  placeholder="enter your password"
                  value={confPassword}
                  onChange={(e) => {
                    setconfPassword(e.target.value);
                  }}
                ></input>
              </div>
              <button type="submit" class="btn btn-primary btn-sm btn-block">
                Register
              </button>

              <Link to="/login">already have an account? Login here</Link>

              {/* <Link to="/register">dont have an account? Register here</Link> */}
            </form>
          </div>
        </div>
      </div>
    );
}

export default Register