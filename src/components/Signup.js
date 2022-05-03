import React from "react";
import { useState } from "react";

import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  return (
    <div>
      <h1 className="text-center mt-4">Sign Up</h1>

      <div className="container">
        <form method="POST">
          <div class="form-group">
            <label for="exampleInputPassword1">Your Name</label>
            <input type="text" name="name" class="form-control" id="exampleInputPassword1"placeholder="Your Name"/>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Phone No.</label>
            <input type="text" name="phone" class="form-control" id="exampleInputPassword1" placeholder="phone"/>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" name="password" id="exampleInputPassword1" placeholder="Password"/>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" name="cpassword" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
       
          <div className="text-center">
            <button type="submit" class="btn btn-primary  m-4">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
