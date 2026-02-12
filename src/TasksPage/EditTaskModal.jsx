import { useRef, useEffect } from "react";

function EditTaskModal({ dialogEditRef, tasks, setTasks, taskID }) {
  const fachRef = useRef();
  const startWeekRef = useRef();
  const endWeekRef = useRef();
  const descriptionRef = useRef();

  let currentTask = [...tasks].find((task) => task.id == taskID);

  useEffect(() => {
    if (!currentTask) return;

    const { fach, weeks, description } = currentTask;

    fachRef.current.value = fach;
    startWeekRef.current.value = weeks[0];
    endWeekRef.current.value = weeks[weeks.length - 1];
    descriptionRef.current.value = description;
  }, [taskID, tasks]);

  function editTask() {
    const startWeek = Number(startWeekRef.current.value);
    let endWeek;

    endWeekRef.current.value == ""
      ? (endWeek = Number(startWeekRef.current.value))
      : (endWeek = Number(endWeekRef.current.value));

    const weeks = [];
    for (let i = startWeek; i <= endWeek; i++) {
      weeks.push(i);
    }

    let newTask = {
      description: descriptionRef.current.value,
      fach: fachRef.current.value,
      weeks: weeks,
      finished: false,
      id: taskID,
    };

    descriptionRef.current.value = "";
    fachRef.current.value = "";
    startWeekRef.current.value = "";
    endWeekRef.current.value = "";

    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskID),
    );
    setTasks((previousTasks) => [...previousTasks, newTask]);

    dialogEditRef.current.close();
  }

  return (
    <dialog id="newTaskModal" ref={dialogEditRef}>
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
        <button className="buttonImp" onClick={editTask}>
          Aufgabe speichern
        </button>
      </div>
    </dialog>
  );
}

export default EditTaskModal;
