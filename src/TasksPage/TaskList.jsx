import NoListItems from "./NoListItems.jsx";
import { useState } from "react";

function TaskList({ tasks, setTasks }) {
  const emptyobject = {
    description: "",
    fach: "Fach (LehrerKürzel)",
    weeks: [21],
    finished: false,
    id: 0
  };

  const [finishedFilterType, setFinishedFilterType] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

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
      )
    );
  }

  function finishTask(taskID) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskID ? { ...task, finished: true } : task
      )
    );
  }

  function deleteTask(taskID) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskID)
    );
  }

  if (tasks !== null) {
    let TasksMapped = [...tasks]
      .filter((task) => task.finished == finishedFilterType)
      .filter(
        (task) =>
          searchTerm === "" ||
          [task.fach, task.description]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.weeks[0] - b.weeks[0])
      .sort((a, b) => a.weeks.length - b.weeks.length)
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
            <button onClick={() => finishTask(task.id)}>Abhaken</button>
            <button onClick={() => deleteTask(task.id)}>Löschen</button>
          </div>
        </div>
      ));

    return (
      <div className="taskList">
        <input
          className="searchTasks"
          type="text"
          placeholder="Dalton-Aufgaben suchen…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter">
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
        </div>
        {TasksMapped.length == 0 ? <NoListItems /> : TasksMapped}
      </div>
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
