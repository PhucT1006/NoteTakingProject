import React from "react";
import { Link } from "react-router-dom";
import s from "./ForgotPass.module.css";
import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { getErrorMap } from "zod";

const ForgotPass = () => {
  const { passwordReset } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await passwordReset(formData.email);
      setErrorMsg("Password reset has been sent to your email");
      console.log(data);
      console.log(error);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.wrap}>
          <form className={s.formStyle} onSubmit={handleSubmit}>
            <h1 className={s.head}>Forgot Password</h1>
            <input
              className={s.signTxt}
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChanges}
              required
            />
            <button type="submit" className={s.sub} disabled={loading}>
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
