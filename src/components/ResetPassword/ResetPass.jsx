import React from "react";
import s from "./ResetPass.module.css";
import * as Yup from "Yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPass = () => {
  const { updatePassword } = useAuth();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is Required")
      .min(8, "Must have at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must have at least 1 special characters"
      )
      .matches(/[0-9]/, "Must have at least 1 number")
      .matches(/[a-z]/, "Must have at least 1 lowercase letter")
      .matches(/[A-Z]/, "Must have at least 1 uppercase letter"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
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
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors("");
      setLoading(true);
      const { data, error } = await updatePassword(formData.password);
      setErrors("Done!");
      if (!error) {
        navigate("/");
      }
    } catch (error) {
      /*  const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors); */
      setErrors(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <div className={s.wrap}>
            <form className={s.formStyle} onSubmit={handleSubmit}>
              <h1 className={s.head}>Reset Password</h1>

              <input
                className={s.signTxt}
                type="password"
                name="password"
                placeholder="New Password"
                value={formData.password}
                onChange={handleChanges}
                autoComplete="on"
              />
              {errors.password && <p className={s.error}>{errors.password}</p>}

              <input
                className={s.signTxt}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChanges}
                autoComplete="on"
              />
              {errors.confirmPassword && (
                <p className={s.error}>{errors.confirmPassword}</p>
              )}
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
    </>
  );
};

export default ResetPass;
