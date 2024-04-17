import React, { useLayoutEffect, useState } from "react";
import s from "./LogIn.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { set } from "react-hook-form";

const LogIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  /* FORM DATA */
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /* VALIDATION */

  /* UPDATE THE VALUE OF "email" AND "password" IN FORM DATA */
  const handleChanges = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* HANDLE FORM SUBMISSION */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (formData.email === "" || formData.password === "") {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(formData.email, formData.password);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password incorrect");
    }
    setLoading(false);
  };
  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <div className={s.wrap}>
            <form className={s.formStyle} onSubmit={handleSubmit}>
              <h1 className={s.head}>Log In </h1>

              {/*  <p className={s.error} id="error-msg">
              Incorrect Email or Password. Please try again.
            </p> */}
              {errorMsg && <p className={s.error}>{errorMsg}</p>}
              <input
                className={s.signTxt}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChanges}
                required
                autoComplete="on"
                placeholder="Email"
              />
              {/*  {error.email && <p className={s.error}>{error.email}</p>} */}
              <input
                className={s.signTxt}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChanges}
                required
                autoComplete="on"
                placeholder="Password"
              />
              {/* {error.password && <p className={s.error}>{error.password}</p>} */}
              <button type="submit" className={s.sub} disabled={loading}>
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
