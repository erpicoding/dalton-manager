import prio1 from "/src/assets/prio 1.svg";
import prio2 from "/src/assets/prio 2.svg";
import prio3 from "/src/assets/prio 3.svg";
import prio4 from "/src/assets/prio 4.svg";
import prio5 from "/src/assets/prio 5.svg";

import { useRef, useEffect, useState } from "react";

function EditTaskModal({
  dialogEditRef,
  tasks,
  setTasks,
  fächer,
  setFächer,
  taskID,
}) {
  const fachRef = useRef();
  const startWeekRef = useRef();
  const endWeekRef = useRef();
  const descriptionRef = useRef();
  const [selectedPrio, setSelectedPrio] = useState(3);
  const finishedRef = useRef();

  let currentTask = [...tasks].find((task) => task.id == taskID);

  useEffect(() => {
    if (!currentTask) return;

    const { fach, weeks, description, prio, finished } = currentTask;

    fachRef.current.value = fach;
    startWeekRef.current.value = weeks[0];
    endWeekRef.current.value = weeks[weeks.length - 1];
    descriptionRef.current.value = description;
    setSelectedPrio(prio ?? 3);
    finishedRef.current.checked = finished;
  }, [taskID, tasks]);

  function deleteTask() {
    console.log("run DELETION ");
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskID),
    );

    descriptionRef.current.value = "";
    fachRef.current.value = "";
    startWeekRef.current.value = "";
    endWeekRef.current.value = "";
    setSelectedPrio(3);

    dialogEditRef.current.close();
  }

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

    console.log("CB value is: ", finishedRef.current.checked);

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
      prio: selectedPrio,
      finished: finishedRef.current.checked,
      id: taskID,
    };

    // reset all inputs
    descriptionRef.current.value = "";
    fachRef.current.value = "";
    startWeekRef.current.value = "";
    endWeekRef.current.value = "";
    setSelectedPrio(0);

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

      <div>
        <input ref={finishedRef} type="checkbox" />
        <span>Erledigt</span>
      </div>
      <div className="prioRow">
        <b>Priorität:</b>
        <button
          title="Sehr hoch"
          onClick={() => setSelectedPrio(1)}
          className={selectedPrio == 1 ? "prio prioSelected" : "prio"}
        >
          <img src={prio1} alt="1" />
        </button>
        <button
          title="Hoch"
          onClick={() => setSelectedPrio(2)}
          className={selectedPrio == 2 ? "prio prioSelected" : "prio"}
        >
          <img src={prio2} alt="2" />
        </button>
        <button
          title="Mittel"
          onClick={() => setSelectedPrio(3)}
          className={selectedPrio == 3 ? "prio prioSelected" : "prio"}
        >
          <img src={prio3} alt="3" />
        </button>
        <button
          title="Niedrig"
          onClick={() => setSelectedPrio(4)}
          className={selectedPrio == 4 ? "prio prioSelected" : "prio"}
        >
          <img src={prio4} alt="4" />
        </button>
        <button
          title="Sehr niedrig"
          onClick={() => setSelectedPrio(5)}
          className={selectedPrio == 5 ? "prio prioSelected" : "prio"}
        >
          <img src={prio5} alt="5" />
        </button>
      </div>

      <div className="buttonRow">
        <form method="dialog">
          <button className="buttonNormal">Schließen</button>
        </form>
        <button className="buttonBad" onClick={deleteTask}>
          Löschen
        </button>
        <button className="buttonImp" onClick={editTask}>
          Aufgabe speichern
        </button>
      </div>
    </dialog>
  );
}

export default EditTaskModal;
