import { useRef } from "react";

import { newID } from "/src/functions.jsx";

function NewTaskModal({ dialogRef, tasks, setTasks }) {
  const fachRef = useRef();
  const startWeekRef = useRef();
  const endWeekRef = useRef();
  const descriptionRef = useRef();

  function createTask() {
    const startWeek = Number(startWeekRef.current.value);
    const endWeek = Number(endWeekRef.current.value);

    const weeks = [];
    for (let i = startWeek; i <= endWeek; i++) {
      weeks.push(i);
    }

    let newTask = {
      description: descriptionRef.current.value,
      fach: fachRef.current.value,
      weeks: weeks,
      finished: false,
      id: newID()
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);

    dialogRef.current.close();
  }

  return (
    <dialog id="newTaskModal" ref={dialogRef}>
      <h3>Neue Dalton-Aufgabe</h3>

      <input ref={fachRef} type="text" placeholder="Fach (Lehrer)" />
      <input ref={startWeekRef} type="text" placeholder="Lernwoche Start" />
      <input ref={endWeekRef} type="text" placeholder="Lernwoche Ende" />
      <textarea ref={descriptionRef}></textarea>

      <form method="dialog">
        <button>Schließen</button>
      </form>
      <button onClick={createTask}>Aufgabe erstellen</button>
    </dialog>
  );
}

export default NewTaskModal;
