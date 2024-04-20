import { useAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
const Home = () => {
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
    <>
      {" "}
      <div>
        <nav className={style.navBar}>
          <p className={style.currentPage}>Notes</p>
          <ul className={style.navLinks}>
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
              <Link className={style.links} onClick={handleLogout}>
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Home;
