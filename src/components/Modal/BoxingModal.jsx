import React from "react";
import s from "./Modal.module.css";

import { Link } from "react-router-dom";
function BoxingModal() {
  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <Link to={"/StudyMethods"} className={s.close}>
            X
          </Link>
          <div className={s.title}>
            <h1>Space Repetition</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxingModal;
