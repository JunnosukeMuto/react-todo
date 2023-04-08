import {useState, useEffect} from "react";

const TaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // every time props updated,
  // title and desc must be set props.task.title and props.task.desc.
  // useState() runs only once,
  // so update them in useEffect().
  useEffect(() => {
    setTitle(props.task.title);
    setDesc(props.task.desc);
  }, [props.task]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleSubmit = () => {
    props.onSubmit(title, desc, props.task.id);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="form-control gap-4">
      <span className="flex justify-center text-lg">Edit Task</span>
      <input value={title} onChange={handleTitleChange} type="text" placeholder="Add Title" className="input input-bordered" />
      <textarea value={desc} onChange={handleDescChange} placeholder="Add Description" className="textarea textarea-bordered max-h-60" />
      <button onClick={title ? handleSubmit : () => {}} className={"btn btn-primary normal-case" + (title ? "" : " btn-disabled")}>Submit</button>
    </div>
  );
};

export default TaskForm;