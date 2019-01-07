import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import "../css/reset.css";

class ResetPassword extends Component {
  render(){
    return (
      <div>
    <div className="background"></div>
    <form id="form_id" method="post" name="myform">
      <div className="input-groups">
        <div className="input-group">
          <label>Please enter your Email</label>
          <input type="email" name="email" id="email" ></input>
        </div>

        <div>
          <input type="button" className="btn" id="submitBtn" name="login_btn" value="Reset password"/>
        </div>

      </div>
    </form>
    </div>
    );
  }
}

export default ResetPassword;
