import React, { useState } from "react";

function FachSelect({ optionsList, selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

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
  const mappedOptionList = optionsList.map((option) => (
    <div
      key={option.teacher + option.room}
      className={"selectItem " + roomColor(option.room)}
      onClick={() => selectOptionAndClose(option.teacher + " - " + option.room)}
    >
      <b>{option.teacher}</b>
      <span>{option.room}</span>
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
