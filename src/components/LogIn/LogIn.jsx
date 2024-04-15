import React from "react";
import s from "./LogIn.module.css";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <div className={s.wrap}>
            <form className={s.formStyle}>
              <h1 className={s.head}>Log In </h1>

              {/*  <p className={s.error} id="error-msg">
              Incorrect Email or Password. Please try again.
            </p> */}

              <input
                className={s.signTxt}
                type="text"
                name="user/email"
                id="user/email"
                placeholder="Email"
                required
                autoFocus
              />

              <input
                className={s.signTxt}
                type="password"
                name="Password"
                id="Password"
                placeholder="Password"
                required
              />
              <button type="submit" className={s.sub}>
                Log In
              </button>

              <p className={s.changeMessage}>
                Need an account?{" "}
                <Link to={"/SignUp"} className={s.changePage}>
                  SIGN UP
                </Link>
              </p>
              <p className={s.changeMessage}>
                <Link to={"/ForgotPass"} className={s.changePage}>
                  Forgot Password?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
