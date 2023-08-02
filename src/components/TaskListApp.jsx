import React, { useState } from "react";
import { TodoHeader } from "./TodoHeader/TodoHeader";
import "./TaskListApp.css";

import { TasksList } from "./TaskList/TasksList";
import { ProgressCard } from "./ProgressCard/ProgressCard";
import { Task } from "./Task/Task";

import { Modal } from "./Modal/Modal";

export const TaskListApp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("TASKS")) || []);
  const completedTasks = tasks.filter((task) => task.completed == true).length;
  const progressTasks = tasks.filter((task) => task.completed == false).length;

  const aggreeTask = () => {
    const taskToAgree = newTask.trim()
    const values = tasks.map((tasks) => tasks.text);
    if (values.includes(taskToAgree)) {
      setNewTask("");
      setModalStatus((modalStatus) => !modalStatus);
      return;
    }
    localStorage.setItem(
      "TASKS",
      JSON.stringify([...tasks, { text: newTask, completed: false }])
    );
    setTasks((tasks) => [...tasks, { text: newTask, completed: false }]);

    setNewTask("");
    setModalStatus((modalStatus) => !modalStatus);
  };

  const finishTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text == text);
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    localStorage.setItem("TASKS", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const deleteTask = (taskDeleted) => {
    const newTasks = tasks.filter((task) => task.text != taskDeleted);
    localStorage.setItem("TASKS", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <main className="card">
        {modalStatus && (
          <Modal
            modalStatus={modalStatus}
            newTask={newTask}
            setNewTask={setNewTask}
            aggreeTask={() => aggreeTask()}
            setModalStatus={setModalStatus}
          />
        )}
        <TodoHeader />
        <section className="main-section">
          <TasksList searchValue={searchValue} setSearchValue={setSearchValue}>
            {searchValue.trim() !== ""
              ? tasks
                  .filter((task) =>
                    task.text.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((filteredTask) => (
                    <Task
                      key={filteredTask.text}
                      text={filteredTask.text}
                      deleteTask={() => deleteTask(filteredTask.text)}
                      completed={filteredTask.completed}
                      completedTaskFn={() => finishTask(filteredTask.text)}
                    />
                  ))
              : tasks.map((task) => (
                  <Task
                    key={task.text}
                    text={task.text}
                    deleteTask={() => deleteTask(task.text)}
                    completed={task.completed}
                    completedTaskFn={() => finishTask(task.text)}
                  />
                ))}
          </TasksList>
          <ProgressCard
            progress={progressTasks}
            totalTasks={tasks.length}
            finished={completedTasks}
            modalStatus={modalStatus}
            setModalStatus={setModalStatus}
          />
        </section>
      </main>
    </div>
  );
};
