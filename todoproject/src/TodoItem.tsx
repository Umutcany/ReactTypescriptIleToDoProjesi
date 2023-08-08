import React from "react";
import { todoType } from "./apptypes";

type PropsType = {
  task: todoType;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div className="todotasks">
      <div>
        <p>{task.taskname}</p>
        <p>{task.workday}</p>
        <button onClick={() => deleteTask(task.taskname)}>SİL!</button>
      </div>
    </div>
  );
}

export default TodoItem;
