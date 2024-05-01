import React from "react";
import s from "./Modal.module.css";
import NavBar from "../Home/NavBar";
import { Link } from "react-router-dom";
function CornellModal() {
  return (
    <>
      <NavBar />
      <div className={s.background}>
        <div className={s.container}>
          <Link to={"/Notes"} className={s.close}>
            X
          </Link>
          <div className={s.title}>
            <h1>Cornell</h1>
          </div>
          <div className={s.pic}>
            <img
              src="src\img\Cornell.jpg"
              alt="ertre"
              width={305}
              height={307}
            />
          </div>
          <div className={s.btnPosition}>
            <Link to={"/Cornell"} className={s.use}>
              Use Template
            </Link>
            {/*  </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CornellModal;
