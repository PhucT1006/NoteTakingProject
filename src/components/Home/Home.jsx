import CornellModal from "../Modal/CornellModal";
import OutlineModal from "../Modal/OutlineModal";
import MappingModal from "../Modal/MappingModal";
import BoxingModal from "../Modal/BoxingModal";
import { useState } from "react";
import NavBar from "./NavBar";
import s from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [CornellStatus, setCornellStatus] = useState(false);
  const [OutlineStatus, setOutlineStatus] = useState(false);
  const [BoxingStatus, setBoxingStatus] = useState(false);
  const [MappingStatus, setMappingStatus] = useState(false);
  return (
    <>
      {" "}
      <NavBar />
      <div className={s.outer}>
        <div className={s.noteContainer}>
          <div className={s.title}>Cornell Template</div>
          <hr />
          <Link to={"/CornellModal"} className={s.btn}>
            Preview
          </Link>
        </div>
        <div className={s.noteContainer}>
          <div className={s.title}> Outline Template </div>
          <hr />
          <Link to={"/OutlineModal"} className={s.btn}>
            Preview
          </Link>
        </div>
        <div className={s.noteContainer}>
          <div className={s.title}> Boxing Template </div>
          <hr />
          <Link to={"/BoxingModal"} className={s.btn}>
            Preview
          </Link>
        </div>
        <div className={s.noteContainer}>
          <div className={s.title}> Mapping Template </div>
          <hr />
          <Link to={"/MappingModal"} className={s.btn}>
            Preview
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
