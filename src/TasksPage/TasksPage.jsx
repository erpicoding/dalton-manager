import { useRef, useState, useEffect } from "react";

import TaskList from "./TaskList.jsx";
import NewTaskModal from "./NewTaskModal.jsx";
import newTaskIcon from "/src/assets/newTaskIcon.png";

function TaskPage() {
  const dialogRef = useRef();
  function openModal() {
    dialogRef.current.showModal();
  }

  const [tasks, setTasks] = useState(() => {
    const raw = localStorage.getItem("tasks");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="buttonRow">
        <button className="buttonImp" onClick={openModal}>
          <img src={newTaskIcon} alt="Icon" />
          Neue Dalton-Aufgabe
        </button>
        <button className="buttonNormal">Dalton-Plan hochladen</button>
      </div>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <NewTaskModal dialogRef={dialogRef} tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default TaskPage;
