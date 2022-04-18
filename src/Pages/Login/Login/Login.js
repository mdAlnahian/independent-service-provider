import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../../firebase.init";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser] = useSignInWithGithub(auth);


    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    if (user || googleUser || githubUser) {
      navigate(from, { replace: true });
    }

    const handleUserSignIn =(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }


    const [sendPasswordResetEmail] =
      useSendPasswordResetEmail(auth);

    const resetPassword =async()=>{

        if (email) {
          await sendPasswordResetEmail(email);
          alert("Sent email");
        } else {
          alert("plz enter your email");
        }
    }

  return (
    <div className="form-container mt-5 about">
      <div className="">
        <h2 className="form-title mt-0 mb-5">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group mb-3">
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="input-group mb-3">
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              placeholder="Password"
              required
            ></input>
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          <input className="mb-4 form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to lawyer Ahamed ? <Link to="/register">Please Register</Link>
        </p>
        <p>
          Forget Password ? <button className="btn btn-link"  onClick={resetPassword}>Reset Password</button>
        </p>
        <div className="or-style">
          <div className="or-data"></div>
          <div>or</div>
          <div className="or-data"></div>
        </div>
        <div>
          <div className="go-button mb-2 mt-2">
            <p className="mt-2" onClick={()=>{signInWithGoogle()}}>Continue With Google</p>
          </div>
        </div>
        <div>
          <div className="go-button mb-2 mt-2">
            <p className="mt-2" onClick={()=>{signInWithGithub();}}>Continue With Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
