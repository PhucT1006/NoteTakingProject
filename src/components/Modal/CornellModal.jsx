import React from "react";
import s from "./Modal.module.css";

import { Link } from "react-router-dom";
function CornellModal() {
  return (
    <>
      <div className={s.background}>
        <div className={s.container}>
          <Link to={"/StudyMethods"} className={s.close}>
            X
          </Link>
          <div className={s.title}>
            <h1>Pomodoro Method</h1>
          </div>
          <ul>
            <li>
              <p className={s.ruleHeader}>This method follows a simple rule</p>
              <p className={s.rule}>
                1. Set a timer to study, then once timer goes off
              </p>
              <p className={s.rule}>2. Start the timer for a break</p>
              <p className={s.rule}>3. Rinse and Repeat</p>
              <p className={s.rule}>
                <strong>Example: 45 min study + 15 min break</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CornellModal;
