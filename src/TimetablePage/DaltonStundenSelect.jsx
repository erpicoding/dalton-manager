import React, { useState, useEffect } from "react";

function FachSelect({ optionsList, selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const [favoriteDaltonStunden, setFavoriteDaltonStunden] = useState(() => {
    const raw = localStorage.getItem("favoriteDaltonStunden");
    return raw ? JSON.parse(raw) : [];
  });
  useEffect(() => {
    localStorage.setItem(
      "favoriteDaltonStunden",
      JSON.stringify(favoriteDaltonStunden),
    );
  }, [favoriteDaltonStunden]);

  function selectOptionAndClose(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  function roomColor(room) {
    if (room == "J109") {
      return "stillarbeit";
    } else if (room == "K109") {
      return "keineGruppen";
    } else if (room == "J106" || room == "J014 Media") {
      return "oberstufe";
    } else {
      return "";
    }
  }
  function setFavorite(el, daltonStundeID) {
    el.stopPropagation();

    if (favoriteDaltonStunden.includes(daltonStundeID)) {
      setFavoriteDaltonStunden((prev) =>
        prev.filter((item) => item !== daltonStundeID),
      );
    } else {
      setFavoriteDaltonStunden([...favoriteDaltonStunden, daltonStundeID]);
    }
  }
  // daltonStundeID ist lehrer && raum
  function checkFavorite(daltonStundeID) {
    if (favoriteDaltonStunden.includes(daltonStundeID)) {
      return "favorite";
    }
  }
  const mappedOptionList = optionsList.map((option) => (
    <div
      key={option.teacher + option.room}
      className={"selectItem " + roomColor(option.room)}
      onClick={() => selectOptionAndClose(option.teacher + " - " + option.room)}
    >
      <svg
        onClick={(el) => setFavorite(el, option.teacher + option.room)}
        className={checkFavorite(option.teacher + option.room)}
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
      </svg>
      <div>
        <b>{option.teacher}</b>
        <span>{option.room}</span>
      </div>
    </div>
  ));

  return (
    <div className="customSelect">
      <div className="selectButton" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : "Fach auswählen"}
      </div>

      {isOpen && (
        <>
          {/* Fach-Auswahl als Modal */}
          <div className="backdrop" onClick={() => setIsOpen(false)}></div>
          <div className="selectList">
            <div className="selectGrid">
              {mappedOptionList}
              {/* EA Option */}
              <div
                className="selectItem"
                onClick={() => selectOptionAndClose("Freiarbeitsbereich")}
              >
                <span>Freiarbeitsbereich</span>
              </div>
              {/* keine Stunde Option */}
              <div
                className="selectItem"
                onClick={() => selectOptionAndClose(" ")}
              >
                <span>keine Stunde</span>
              </div>
            </div>
            <div className="legende">
              <span>
                <b>Legende: </b>
              </span>
              <span>
                <div className="stillarbeit"></div> Stillarbeit
              </span>
              <span>
                <div className="keineGruppen"></div> Keine Gruppenarbeit
              </span>
              <span>
                <div className="oberstufe"></div> Nur Oberstufe
              </span>
            </div>
            <div className="buttonRow selectButtonRow">
              <button
                onClick={() => selectOptionAndClose("")}
                className="buttonBad"
              >
                Auswahl Löschen
              </button>
              <button onClick={() => setIsOpen(false)} className="buttonNormal">
                Schließen
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FachSelect;
