import style from "./Index.module.css";
import { Link, Navigate } from "react-router-dom";

// change each to their own class name
// <li className={[style.ListGroup, style.container].join(" ")}>
const Index = () => {
  return (
    <>
      <div>
        <nav className={style.navBar}>
          <img
            className={style.navImg}
            src="../src/img/download.png"
            alt="noter logo"
            height="80px"
            width="160px"></img>
          <ul className={style.navLinks}>
            <li className={style.liItems}>
              <Link to={"/Notes"} className={style.links}>
                Notes
              </Link>
            </li>

            <li className={style.liItems}>
              <Link to={"/StudyMethods"} className={style.links}>
                Study Methods
              </Link>
            </li>
            <li className={style.liItems}>
              <Link to={"/TodoList"} className={style.links}>
                Todo-List
              </Link>
            </li>
            <li className={style.liItems}>
              <Link to={"/Pomodoro"} className={style.links}>
                Pomodoro
              </Link>
            </li>
            <li className={style.liItems}>
              <Link to={"/MyNotes"} className={style.links}>
                My Notes
              </Link>
            </li>
            <li className={style.liItems}>
              <Link to={"/LogIn"} className={style.links}>
                Log-In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className={style.container}>
        <h2 className={style.mainText}>Note-Taking Made Simple</h2>
      </main>
    </>
  );
};
export default Index;
/* {Pages.map((Page) => (
  <li key={Page}>
    <Link to={"/" + page}>{Page}</Link>
  </li>
))} */

/*  <li>
              <Link to={"/Signup"}>Sign-Up</Link>
            </li> */
