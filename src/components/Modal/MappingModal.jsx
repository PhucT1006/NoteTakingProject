import React from "react";
import s from "./Modal.module.css";

import { Link } from "react-router-dom";
function MappingModal() {
  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <Link to={"/StudyMethods"} className={s.close}>
            X
          </Link>
          <div className={s.title}>
            <h1>Active Recall</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MappingModal;
