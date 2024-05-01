import React from "react";
import s from "./Modal.module.css";
import NavBar from "../Home/NavBar";
import { Link } from "react-router-dom";
function MappingModal() {
  return (
    <>
      <NavBar />
      <div className={s.background}>
        <div className={s.container}>
          <Link to={"/Notes"} className={s.close}>
            X
          </Link>
          <div className={s.title}>
            <h1>Mapping</h1>
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
            <button className={s.use}>Use Template</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MappingModal;
