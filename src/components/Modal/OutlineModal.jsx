import React from "react";
import s from "./Outline.module.css";

import { Link } from "react-router-dom";
function OutlineModal() {
  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <Link to={"/StudyMethods"} className={s.close}>
            X
          </Link>
          <div className={s.title}>
            <h1>Fyenman Technique</h1>
          </div>
          <ul>
            <li>
              <p className={s.rule}>1. Learn a concept</p>
              <p className={s.rule}>2. Find a friend or sibling</p>
              <p className={s.rule}>
                3. Explain the concept to them like they're 5
              </p>
              <p className={s.finalRule}>
                <strong>
                  If you are able to do that then you have mastered the concept
                </strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OutlineModal;
