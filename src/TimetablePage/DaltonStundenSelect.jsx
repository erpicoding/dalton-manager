import React, { useState } from "react";

function FachSelect({ optionsList, selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  function selectOptionAndClose(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  const mappedOptionList = optionsList.map((option) => (
    <div
      key={option.teacher + option.room}
      className="selectItem"
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
                onClick={() => selectOptionAndClose("Arbeiten ohne Lehrer")}
              >
                <span>Arbeiten ohne Lehrer</span>
              </div>
              {/* keine Stunde Option */}
              <div
                className="selectItem"
                onClick={() => selectOptionAndClose("keine Stunde")}
              >
                <span>keine Stunde</span>
              </div>
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
