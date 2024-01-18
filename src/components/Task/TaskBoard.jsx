import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import EmptyTask from "./EmptyTask";
import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState(null);

  // Add Task Handler
  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddModal(false);
  };

  // Handle Edit Task
  const handleEditTask = (editTask) => {
    setTaskUpdate(editTask);
    setShowAddModal(true);
  };
  // Handle Delete Task
  const handleDeleteTask = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  };
  // Handle All Task Delete
  const handleAllDeleteTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  // Handle Close Click
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskUpdate(null);
  };
  // Handle Favorite
  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    setTasks(newTask);
  };

  // Handle Search
  const handleSearch = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setTasks([...filtered]);
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskUpdate={taskUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container mx-auto">
        <SearchBox onSearch={handleSearch} />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={() => setShowAddModal(true)}
            onDeleteAllClick={handleAllDeleteTask}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavorite}
            />
          ) : (
            <EmptyTask />
          )}
        </div>
      </div>
    </section>
  );
}
