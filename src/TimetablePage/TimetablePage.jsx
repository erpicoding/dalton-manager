import { useState, useEffect } from "react";

import WeekA from "./WeekA.jsx";
import WeekB from "./WeekB.jsx";

function TimetablePage() {
  const [selectedWeek, setSelectedWeek] = useState("a");
  const [daltonStunden, setDaltonStunden] = useState();

  const [selectedDaltonStunden, setSelectedDaltonStunden] = useState(() => {
    const raw = localStorage.getItem("selectedDaltonStunden");
    return raw
      ? JSON.parse(raw)
      : {
          a: {
            mo2: "",
            mo4: "",
            di2: "",
            di4: "",
            mi2: "",
            mi4: "",
            do2: "",
            do4: "",
            fr2: "",
            fr4: "",
          },
          b: {
            mo2: "",
            mo4: "",
            di2: "",
            di4: "",
            mi2: "",
            mi4: "",
            do2: "",
            do4: "",
            fr2: "",
            fr4: "",
          },
        };
  });
  useEffect(() => {
    localStorage.setItem(
      "selectedDaltonStunden",
      JSON.stringify(selectedDaltonStunden),
    );
  }, [selectedDaltonStunden]);

  useEffect(() => {
    fetch("/json/daltonStunden.json")
      .then((res) => res.json())
      .then((json) => setDaltonStunden(json));
  }, []);

  if (daltonStunden !== undefined) {
    return (
      <>
        <div className="weekSelect">
          {selectedWeek == "a" ? (
            <div className="buttonRow">
              <button className="selectedFilter">A Woche</button>
              <button onClick={() => setSelectedWeek("b")}>B Woche</button>
            </div>
          ) : (
            <div className="buttonRow">
              <button onClick={() => setSelectedWeek("a")}>A Woche</button>
              <button className="selectedFilter">B Woche</button>
            </div>
          )}
        </div>

        <div>
          {selectedWeek == "a" ? (
            <WeekA
              daltonStunden={daltonStunden}
              selectedDaltonStunden={selectedDaltonStunden}
              setSelectedDaltonStunden={setSelectedDaltonStunden}
            />
          ) : (
            <WeekB
              daltonStunden={daltonStunden}
              selectedDaltonStunden={selectedDaltonStunden}
              setSelectedDaltonStunden={setSelectedDaltonStunden}
            />
          )}
        </div>
      </>
    );
  } else {
    return (
      <div className="warning">
        <p>
          Daten werden geladen. Bitte kurz warten...
          <br />
          Wenn das Laden zu lange dauert, überprüfe dein Internet oder
          kontaktiere uns.
        </p>
      </div>
    );
  }
}

export default TimetablePage;
