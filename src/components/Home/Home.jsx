import style from "./Home.module.css";
import Pages from "./Page";

const Home = () => {
  return (
    <>
      <div>
        <nav className={style.navbar}>
          <img
            className={style.navImg}
            src="../src/img/download.png"
            alt="noter logo"
            height="80px"
            width="160px"></img>
          <ul className={style.navLinks}>
            {Pages.map((Page) => (
              <li key={Page}>
                <a href="">{Page}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main className={style.container}>
        <h2 className={style.mainText}>Note-Taking Made Simple</h2>
      </main>
    </>
  );
};
export default Home;
