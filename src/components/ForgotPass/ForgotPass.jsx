import React from "react";
import { Link } from "react-router-dom";
import s from "./ForgotPass.module.css";
const ForgotPass = () => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.wrap}>
          <form className={s.formStyle}>
            <h1 className={s.head}>Forgot Password</h1>
            <input
              className={s.signTxt}
              type="text"
              name="pass/email"
              id="pass/email"
              placeholder="Email"
              required
              autoFocus
            />
            <button type="submit" className={s.sub}>
              Reset
            </button>
            <p className={s.changeMessage}>
              {" "}
              <Link to={"/LogIn"} className={s.changePage}>
                Back
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
