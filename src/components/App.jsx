import {useState} from "react";
import {FcCheckmark} from "react-icons/fc"
import Modal from "./Modal";
import Navbar from "./Navbar";
import NewTaskButton from "./NewTaskButton";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

const App = () => {
  const [tasks, setTasks] = useState({});

  const [modalOpened, setModalOpened] = useState(false);

  // <TaskForm /> can be used when creating new task, and editing task.
  // so, <App /> has to give <TaskForm /> what to edit:
  //
  // - when creating new task, give empty task.
  // - when editing task, give task to edit.
  const [taskInTaskForm, setTaskInTaskForm] = useState({
    title: "",
    desc: "",
    id: "",
  });

  const handleNewTaskClick = () => {
    setModalOpened(true);
    setTaskInTaskForm({
      title: "",
      desc: "",
      id: "",
    });
  };

  const handleEditTask = (id) => {
    setModalOpened(true);
    setTaskInTaskForm(tasks[id]);
  };

  const handleCloseModal = () => {
    setModalOpened(false);
  };

  // task's id is same as its key.
  // when you need to delete or edit task,
  // use id to specify what to delete or edit.
  const handleSubmitTask = (title, desc, id) => {
    const newId = id ? id : "task" + Date.now();
    const newTasks = tasks;
    newTasks[newId] = {
      title: title,
      desc: desc,
      id: newId,
    };
    setTasks(newTasks);
    setModalOpened(false);
  };

  const handleDeleteTask = (id) => {
    const keys = Object.keys(tasks);
    const newKeys = keys.filter(key => key !== id);
    const newTasks = {};
    newKeys.map(
      (key) => {
        newTasks[key] = tasks[key];
        return null;
      }
    );
    setTasks(newTasks);
  };

  const taskList = Object.values(tasks).map(
    (task) => {
      return (
        <li key={task.id}>
          <TaskCard task={task} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
        </li>
      );
    }
  );

  const NoTask = Object.keys(tasks).length ? <></> : (
    <div className="flex flex-col items-center py-40">
      <span className="text-8xl md:text-9xl">
        <FcCheckmark />
      </span>
      <span className="text-xl md:text-2xl">All tasks completed !</span>
    </div>
  );

  // <Modal /> and <TaskForm /> are completely separated.
  return (
    <>
      <Navbar>
        <NewTaskButton onClick={handleNewTaskClick}/>
      </Navbar>
      {NoTask}
      <ul className="grid p-6 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {taskList}
      </ul>
      <Modal opened={modalOpened} onCloseModal={handleCloseModal}>
        <TaskForm task={taskInTaskForm} onSubmit={handleSubmitTask} />
      </Modal>
    </>
  );
};

export default App;