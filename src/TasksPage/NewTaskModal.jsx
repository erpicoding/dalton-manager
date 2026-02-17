import { useRef } from "react";

import { newID } from "/src/functions.jsx";

function NewTaskModal({ dialogNewRef, tasks, setTasks, fächer, setFächer }) {
  const fachRef = useRef();
  const startWeekRef = useRef();
  const endWeekRef = useRef();
  const descriptionRef = useRef();

  function createTask() {
    const startWeek = Number(startWeekRef.current.value);
    let endWeek;

    endWeekRef.current.value == ""
      ? (endWeek = Number(startWeekRef.current.value))
      : (endWeek = Number(endWeekRef.current.value));

    const weeks = [];
    for (let i = startWeek; i <= endWeek; i++) {
      weeks.push(i);
    }

    console.log(
      "gefundene Fächer: ",
      [...fächer].find((fach) => fach == fachRef.current.value),
    );
    if ([...fächer].find((fach) => fach == fachRef.current.value) == null) {
      console.log("neues Fach ins Array speichern");
      setFächer([...fächer, fachRef.current.value]);
    }

    let newTask = {
      description: descriptionRef.current.value,
      fach: fachRef.current.value,
      weeks: weeks,
      finished: false,
      id: newID(),
    };

    descriptionRef.current.value = "";

    setTasks((previousTasks) => [...previousTasks, newTask]);

    dialogNewRef.current.close();
  }

  return (
    <dialog id="newTaskModal" ref={dialogNewRef}>
      <h3>Neue Dalton-Aufgabe</h3>

      <input ref={fachRef} type="text" placeholder="Fach (Lehrer)" />
      <input ref={startWeekRef} type="text" placeholder="Lernwoche Start" />
      <input ref={endWeekRef} type="text" placeholder="Lernwoche Ende" />
      <textarea
        ref={descriptionRef}
        placeholder="Aufgaben Beschreibung"
      ></textarea>

      <div className="buttonRow">
        <form method="dialog">
          <button className="buttonNormal">Schließen</button>
        </form>
        <button className="buttonImp" onClick={createTask}>
          Aufgabe erstellen
        </button>
      </div>
    </dialog>
  );
}

export default NewTaskModal;
