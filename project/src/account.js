import React from 'react';
import './account.css';
import { Link } from 'react-router-dom';
function account() {
  return (
    <div class="div">
      <h1 class="h1">Sign Up</h1>
      <h2 class="h2">First Name</h2>
  <form class="form">
   <tr><td><input type="text" class="input" placeholder="first name" required></input></td></tr>
     <div class="lname"><h2 class="h222">Last Name</h2>
   <tr class="td1"><td><input type="text" class="input" placeholder="last name" required></input></td></tr></div>
   <h2 class="h223">Email</h2>
   <tr div="td1"><td div="tr1"><input type="text" class="input" placeholder="email" required></input></td></tr>
  <div class="pname"><h2 class="h21">Password</h2>
   <tr><td><input type="password" class="input1" placeholder="password" required></input></td></tr>
   <h2 class="h2">Confirm Password</h2>
   <tr div="td1"><td div="tr1"><input type="password" class="input1" placeholder="confirm password" required></input></td></tr></div>
    <button class="button"><Link to="/home2" class="account-dec">Sign Up</Link></button><hr class="hr"></hr>
    <button class="button"><Link to="/login1" class="account-dec">Already have an account?Sign In</Link></button>
   </form>
      </div>
  );
}

export default account;