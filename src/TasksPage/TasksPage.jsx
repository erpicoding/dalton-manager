import TaskList from "./TaskList.jsx";
import newTaskIcon from "/src/assets/newTaskIcon.png";

function TaskPage() {
  return (
    <>
      <div className="controlButtons">
        <button className="button-new">
          <img src={newTaskIcon} alt="Icon" />
          Neue Dalton-Aufgabe
        </button>
        <button className="button-upload">Dalton-Plan hochladen</button>
      </div>
      <TaskList />
    </>
  );
}

export default TaskPage;
