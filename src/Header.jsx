import tasksIcon from "./assets/tasksIcon.png";
import timetableIcon from "./assets/timetableIcon.png";
import settingsIcon from "./assets/settingsIcon.png";

import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header>
      <nav>
        <a href="/" className={location.pathname == "/" ? "currentPath" : ""}>
          <img src={tasksIcon} alt="Icon" />
          Dalton-Aufgaben
        </a>
        <a
          href="/timetable"
          className={location.pathname == "/timetable" ? "currentPath" : ""}
        >
          <img src={timetableIcon} alt="Icon" />
          Dalton-Stunden
        </a>
        <a
          href="/settings"
          target="_self"
          className={location.pathname == "/settings" ? "currentPath" : ""}
        >
          <img src={settingsIcon} alt="Icon" />
          Einstellungen
        </a>
      </nav>
      <a href="https://dalton.erpicoding.de/login">
        <button className="button-login">Login</button>
      </a>
    </header>
  );
}

export default Header;
