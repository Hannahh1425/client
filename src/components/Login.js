import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import "../css/login.css";

class Login extends Component {
  render(){
    return (
      <div>
        <div className="background"></div>
        <form id="form_id" method="post" name="myform">
          <div className="input-groups">
            <div className="input-group">
              <label>Email/Username</label>
              <input type="text" name="username" id="username" ></input>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" id="password" ></input>
            </div>

            <Link to="/sign_up">
              <button className="btn">Log in</button>
            </Link>

            <p>
              Not yet a member? <Link to="/sign_up">Sign up</Link>
            </p>
            <p>
              Forgot your password? <Link to="/reset_password">Reset Password</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
