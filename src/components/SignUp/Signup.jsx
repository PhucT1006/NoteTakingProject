import supabase from "../../config/SupabaseClient";
import { Link } from "react-router-dom";
import s from "./SignUp.module.css";

const handleSubmit = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: "bob234@gmail.com",
    password: "1212343@Abc!",
  });
};

const EmailIn = () => {};
const Signup = () => {
  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <div className={s.wrap}>
            <form className={s.formStyle}>
              <h1 className={s.head}> Sign Up </h1>
              <input
                className={s.signTxt}
                type="email"
                name="Email"
                id="Email"
                placeholder="Email"
                required
              />
              <p className={s.error} id="emailError">
                Please Enter a Valid Email
              </p>

              <input
                className={s.signTxt}
                type="password"
                name="Password"
                id="Password"
                placeholder="Password"
                required
              />
              <p className={s.error} id="passError">
                Password must contain the following:
              </p>

              <p className={s.requirement} id="characters">
                Minimum 8 characters
              </p>
              <p className={s.requirement} id="upper">
                An uppercase letter
              </p>
              <p className={s.requirement} id="lower">
                A lowercase letter
              </p>
              <p className={s.requirement} id="number">
                A number
              </p>
              <button
                type="submit"
                className={s.sub}
                onClick={() => handleSubmit()}>
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
