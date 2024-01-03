import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="divtag">
      <h1 className="h1tag">Sign In</h1>
      <p className="ptag">Please Sign In to access</p>
      <h2 className="h2tag">Email</h2>
      <form className="formtag">
        <table>
          <tr>
            <td><input type="text" className="inputtag" placeholder="Enter email" required /></td>
          </tr>
          <h2 className="h21tag">Password</h2>
          <tr>
            <td><input type="password" className="input1tag" placeholder="Enter password" required /></td>
          </tr>
        </table>
        <br />
        <button className="buttontag"><Link to="/home1" class="login-dec">Sign In</Link></button>
        <form>
          <p>
            <b className="div1tag"><Link to="/account" class="login-cre">Create Account</Link></b>
            <b className="div2tag">Forgot Password?</b>
          </p>
        </form>
        <p className="p4tag">or</p>
        <p className="p5tag">Sign in with</p>
      </form>
      <button className="b1tag">
        <div className="containertag">
          <img src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" className="imgtag" alt="Google" />
          <h3 className="h3tag">GOOGLE</h3>
        </div>
      </button>
      <br />
      <div className="containtag">
        <div className="containerbutttag">
          <button className="b2tag">
            <div className="container1tag">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" className="img3tag" alt="Facebook" />
              <h3 className="h4tag">FACEBOOK</h3>
            </div>
          </button>
          <button className="b3tag">
            <div className="container1tag">
              <img src="https://www.freeiconspng.com/thumbs/apple-logo-icon/blue-apple-logo-icon-0.png" className="img1tag" alt="Apple" />
              <h3 className="h5tag">APPLE</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
