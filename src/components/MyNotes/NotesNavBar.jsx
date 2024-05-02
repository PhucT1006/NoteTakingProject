import { useAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import style from "./NotesNavBar.module.css";
const NotesNavBar = () => {
  const { signOut } = useAuth();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <nav className={style.navBar}>
        <p className={style.currentPage}>My Notes</p>
        <ul className={style.navLinks}>
          <li className={style.liItems}>
            <Link to={"/StudyMethods"} className={style.links}>
              Study Methods
            </Link>
          </li>
          {/*  <li className={style.liItems}>
            <Link to={"/TodoList"} className={style.links}>
              Todo-List
            </Link>
          </li>
          <li className={style.liItems}>
            <Link to={"/Pomodoro"} className={style.links}>
              Pomodoro
            </Link>
          </li> */}
          <li className={style.liItems}>
            <Link to={"/Notes"} className={style.links}>
              Notes
            </Link>
          </li>
          <li className={style.liItems}>
            <Link className={style.links} onClick={handleLogout}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NotesNavBar;
