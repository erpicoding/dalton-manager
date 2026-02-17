import { useRef, useState, useEffect } from "react";

import TaskList from "./TaskList.jsx";
import NewTaskModal from "./NewTaskModal.jsx";
import newTaskIcon from "/src/assets/newTaskIcon.png";

function TaskPage() {
  const dialogNewRef = useRef();
  function openModal() {
    dialogNewRef.current.showModal();
  }

  const [tasks, setTasks] = useState(() => {
    const raw = localStorage.getItem("tasks");
    return raw ? JSON.parse(raw) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [fächer, setFächer] = useState(() => {
    const raw = localStorage.getItem("fächer");
    return raw ? JSON.parse(raw) : [];
  });
  useEffect(() => {
    localStorage.setItem("fächer", JSON.stringify(fächer));
  }, [fächer]);

  return (
    <>
      <div className="buttonRow">
        <button className="buttonImp" onClick={openModal}>
          <img src={newTaskIcon} alt="Icon" />
          Neue Dalton-Aufgabe
        </button>
        {/* <button className="buttonNormal">Dalton-Plan hochladen</button> */}
      </div>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        fächer={fächer}
        setFächer={setFächer}
      />
      <NewTaskModal
        dialogNewRef={dialogNewRef}
        tasks={tasks}
        setTasks={setTasks}
        fächer={fächer}
        setFächer={setFächer}
      />
    </>
  );
}

export default TaskPage;
