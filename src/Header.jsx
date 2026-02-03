import tasksIcon from "./assets/tasksIcon.png";
import timetableIcon from "./assets/timetableIcon.png";
import settingsIcon from "./assets/settingsIcon.png";

function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={tasksIcon} alt="Icon" />
          Dalton-Aufgaben
        </a>
        <a href="/timetable">
          <img src={timetableIcon} alt="Icon" />
          Stundenplan
        </a>
        <a href="/settings">
          <img src={settingsIcon} alt="Icon" />
          Einstellungen
        </a>
      </nav>

      <button className="button-login">Login per Untis</button>
    </header>
  );
}

export default Header;
