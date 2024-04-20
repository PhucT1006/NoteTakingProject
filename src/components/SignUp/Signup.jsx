import supabase from "../../config/SupabaseClient";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import s from "./SignUp.module.css";
import { useState } from "react";
import * as Yup from "Yup";

/* RESROUCES FOR VALIDATING INPUT AND USING YUP */

// https://github.com/piyush-eon/react-form-validation-tutorial/blob/master/src/components/form-with-yup.jsx
//https://www.youtube.com/watch?v=RQ1E2EjyqY4

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [Loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is Required")
      .email("Please Enter a Valid Email"),
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
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setError("");
      setLoading(true);
      SupabaseSignUp();
    } catch (error) {
      const newError = {};

      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });

      setError(newError);
    }
  };
  const SupabaseSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    navigate("/");
  };
  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <div className={s.wrap}>
            <form className={s.formStyle} onSubmit={handleSubmit}>
              <h1 className={s.head}> Sign Up </h1>
              <input
                className={s.signTxt}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChanges}
                placeholder="Email"
              />
              {error.email && <p className={s.error}>{error.email}</p>}
              <input
                className={s.signTxt}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChanges}
                placeholder="Password"
              />
              {error.password && <p className={s.error}>{error.password}</p>}

              <button
                type="submit"
                className={s.sub} /* disabled={!checkValidity} */
                disabled={Loading}>
                Sign Up
              </button>

              <p className={s.changeMessage}>
                Already a user?{" "}
                <Link to={"/LogIn"} className={s.changePage}>
                  LOG IN
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

{
  /* onClick={handleSubmit */
}
/* 

{lengthChecker === true ? (
  ""
) : (
  <p
    className={lengthChecker === true ? s.valid : s.requirement}
    id="characters">
    Minimum 8 characters
  </p>
)}
{upperChecker === true ? (
  ""
) : (
  <p className={s.requirement} id="upper">
    An uppercase letter
  </p>
)}
{lowerChecker === true ? (
  ""
) : (
  <p className={s.requirement} id="lower">
    A lowercase letter
  </p>
)}
{numChecker === true ? (
  ""
) : (
  <p className={s.requirement} id="number">
    A number
  </p>
)} */
/* 
const requirements = [[]];
const EmailValidityChecker = (e) => {
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (e.target.value.match(emailReg)) {
    setEmailValidity(true);
  } else {
    setEmailValidity(false);
  }
};

const passwordRequirementCheck = (e) => {
  if (e.target.value.length > 8) {
    setLengthChecker(true);
  } else {
    setLengthChecker(false);
  }
  if (e.target.value.match(/[A-Z]/g)) {
    setUpperChecker(true);
  } else {
    setUpperChecker(false);
  }
  if (e.target.value.match(/[a-z]/g)) {
    setLowerChecker(true);
  } else {
    setLowerChecker(false);
  }
  if (e.target.value.match(/[0-9]/g)) {
    setNumChecker(true);
  } else {
    setNumChecker(false);
  }
};
const passwordValidityCheck = () => {
  if (
    lengthChecker === true &&
    upperChecker === true &&
    lowerChecker === true &&
    numChecker === true
  ) {
    setPasswordValidity(true);
  } else {
    setPasswordValidity(false);
  }
};

const checkValidity = () => {
  if (emailValidity === true && passwordValidity === true) {
    return true;
  } else {
    false;
  }
};
 */

{
  /*  {emailValidity === true ? (
                ""
              ) : (
                <p className={s.error} id="emailError">
                  Please Enter a Valid Email
                </p>
              )} */
}

{
  /*    {passwordValidity === true ? (
                ""
              ) : (
                <p className={s.error} id="passError">
                  Password must contain the following:
                </p>
              )}
 */
}
