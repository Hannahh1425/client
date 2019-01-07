import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import "../css/signup.css";

class Signup extends Component {
  render(){
    return (
      <div>
      <div className="background"></div>
        <form id="form_id" method="post" name="myform">
          <div className="input-groups">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" name="first_name" id="first_name" ></input>
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input type="text" name="last_name" id="last_name" ></input>
            </div>

            <div className="input-group">
              <label>Company Name</label>
              <input type="text" name="company_name" id="company_name" ></input>
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" id="email" ></input>
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input type="number" name="phone" id="phone" ></input>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password_1" id="password_1" ></input>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password_2" id="password_2" ></input>
            </div>

            <Link to="/">
              <button className="btn">Sign up</button>
            </Link>

            <p>
              Already a member? <Link to="/log_in">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
