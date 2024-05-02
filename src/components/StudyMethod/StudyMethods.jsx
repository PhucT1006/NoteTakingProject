import { useState } from "react";
import NavBar from "./NavBar";
import s from "./StudyMethods.module.css";
import { Link } from "react-router-dom";
const StudyMethods = () => {
  return (
    <>
      {" "}
      <NavBar />
      <div className={s.outer}>
        <div className={s.noteContainer}>
          <div className={s.title}>Pomodoro Method</div>
          <hr />
          <Link to={"/CornellModal"} className={s.btn}>
            Open
          </Link>
        </div>
        <div className={s.noteContainer}>
          <div className={s.title}> Feynman Technique </div>
          <hr />
          <Link to={"/OutlineModal"} className={s.btn}>
            Open
          </Link>
        </div>
        <div className={s.noteContainer}>
          <div className={s.title}> Space Repetition</div>
          <hr />
          <Link to={"/BoxingModal"} className={s.btn}>
            Open
          </Link>
        </div>
        <div className={s.noteContainer}>
          <div className={s.title}> Active Recall </div>
          <hr />
          <Link to={"/MappingModal"} className={s.btn}>
            Open
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudyMethods;
