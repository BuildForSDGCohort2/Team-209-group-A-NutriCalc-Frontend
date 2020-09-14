import React from 'react'
import {  Link } from "react-router-dom";

const Register= ()=>{
    return (
      <div>
        <div className="container">
          <div className="page-header">
            <h2>Sign Up </h2>
          </div>

          <div className="form-body">
            <form>
              <div className="form-group">
                <label for="email address">Username</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="your@example.com"
                ></input>
              </div>
              <div className="form-group">
                <label for="email address">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="your@example.com"
                ></input>
              </div>
              <div className="form-group">
                <label for="email address">Password</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your password"
                ></input>
              </div>
              <div className="form-group">
                <label for="email address">Confirm password</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your password"
                ></input>
              </div>
              <button type="button" class="btn btn-primary btn-sm btn-block">
                Login
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