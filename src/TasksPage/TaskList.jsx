import { useRef, useState } from "react";

import NoListItems from "./NoListItems.jsx";
import EditTaskModal from "./EditTaskModal.jsx";

function TaskList({ tasks, setTasks, fächer, setFächer }) {
  const dialogEditRef = useRef();

  const [finishedFilterType, setFinishedFilterType] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const currentFächer = [...new Set(tasks.map((task) => task.fach))];

  const [selectedFach, setSelectedFach] = useState("all");
  const [editingTaskId, setEditingTaskId] = useState(null);

  //text Unterstreichen beim Suchen
  function highlightText(text, searchTerm) {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span className="searchHighlight" key={index}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  }

  function finishTask(taskID) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskID ? { ...task, finished: true } : task,
      ),
    );
  }
  function editTask(taskID) {
    setEditingTaskId(taskID);
    dialogEditRef.current.showModal();
  }

  if (tasks !== null) {
    let TasksMapped = [...tasks]
      .filter((task) => task.finished == finishedFilterType)
      .filter((task) => task.fach == selectedFach || selectedFach == "all")
      .filter(
        (task) =>
          searchTerm === "" ||
          [task.fach, task.description]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      )
      .sort((a, b) => a.weeks.length - b.weeks.length)
      .sort((a, b) => a.weeks[0] - b.weeks[0])
      .map((task) => (
        <div className="task" key={task.id}>
          <h3>
            <span className="fachTitel">
              {highlightText(task.fach, searchTerm)}
            </span>
            <span className="lernwochenTitel">
              {task.weeks.length == 1 ? "Lernwoche:  " : "Lernwochen: "}
              {task.weeks.map((value, index, array) => {
                // bei mehreren wochen 1-4 anzeigen
                if (array.length >= 2) {
                  if (index === 0) return `${value} - `;
                  if (index === array.length - 1) return value;
                  return null;
                }
                // bei nur einem el nur das el anzeigen
                return value;
              })}
            </span>
          </h3>
          <p>{highlightText(task.description, searchTerm)}</p>
          <div className="buttonRow">
            <button onClick={() => editTask(task.id)} className="buttonNormal">
              Bearbeiten
            </button>
            <button onClick={() => finishTask(task.id)} className="buttonGood">
              &#10004;
            </button>
          </div>
        </div>
      ));

    return (
      <>
        <div className="taskList">
          <div className="filter">
            <input
              className="searchTasks"
              type="text"
              placeholder="Dalton-Aufgaben suchen…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span>Filter: </span>
            {finishedFilterType ? (
              <button onClick={() => setFinishedFilterType(false)}>
                fertige Aufgaben
              </button>
            ) : (
              <button onClick={() => setFinishedFilterType(true)}>
                aktuelle Aufgaben
              </button>
            )}
            <select
              value={selectedFach}
              onChange={(e) => setSelectedFach(e.target.value)}
            >
              <option value="all">Alle Fächer</option>
              <hr />
              {[...currentFächer].map((fach) => (
                <option key={fach} value={fach}>
                  {fach}
                </option>
              ))}
            </select>
          </div>
          {TasksMapped.length == 0 ? <NoListItems /> : TasksMapped}
        </div>
        <EditTaskModal
          dialogEditRef={dialogEditRef}
          tasks={tasks}
          setTasks={setTasks}
          fächer={fächer}
          setFächer={setFächer}
          taskID={editingTaskId}
        />
      </>
    );
  } else {
    return (
      <div className="warning">
        <p>
          Es sind noch keine Dalton-Aufgaben vorhanden.
          <br />
          Bitte erstelle eine Dalton-Aufgabe!
        </p>
      </div>
    );
  }
}

export default TaskList;
