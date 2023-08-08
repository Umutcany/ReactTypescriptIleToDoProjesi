import "./App.css";
import { ChangeEvent, FC } from "react";
import { useState } from "react";
import { todoType } from "./apptypes";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  console.log(todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskname !== nameToDelete;
      })
    );
  };

  const addNewTask = () => {
    const newTask = { taskname: task, workday: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  return (
    <>
      <div className="maincard">
        <input
          className="maincardinput"
          type="text"
          name="task"
          placeholder="Taskınızı giriniz... "
          value={task}
          onChange={handleChange}
        />
        <input
          className="maincardinput"
          type="number"
          name="workDay"
          placeholder="Kaç günde tamamlamalısınız... "
          value={workDay}
          onChange={handleChange}
        />
        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      <div className="container">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </>
  );
};

export default App;
