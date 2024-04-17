import React from "react";
import s from "./ResetPass.module.css";

const ResetPass = () => {
  return (
    <>
      {" "}
      <div className={s.background}>
        <div className={s.container}>
          <div className={s.wrap}>
            <form className={s.formStyle}>
              <h1 className={s.head}>Forgot Password</h1>
              <input
                className={s.signTxt}
                type="password"
                name="newPass"
                placeholder="New Password"
                required
                autoFocus
              />
              <input
                className={s.signTxt}
                type="password"
                name="confirmPass"
                placeholder="Confirm Password"
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
    </>
  );
};

export default ResetPass;
