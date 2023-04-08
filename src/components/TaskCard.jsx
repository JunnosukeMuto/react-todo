import {useState} from "react";
import {FiEdit2} from "react-icons/fi"

const TaskCard = (props) => {
  const [checked, setChecked] = useState(false);

  // during fadeout animation, card must be alive.
  // so, setTimeout() needed.
  // delay:150ms + duration:250ms = 400ms
  const handleChange = () => {
    setChecked(true);
    setTimeout(() => {
      props.onDeleteTask(props.task.id);
    }, 400);
  };

  const handleEditTask = () => {
    props.onEditTask(props.task.id);
  };

  return (
    <div className={"card h-full bg-base-200 shadow-md duration-250 delay-150 transition-all" + (checked ? " opacity-0 scale-95" : "")}>
      <div className="card-body flex-row items-center gap-6">
        <input checked={checked} onChange={handleChange} type="checkbox" className="checkbox" />
        <div className={"flex flex-col break-all whitespace-pre-wrap" + (props.task.desc ? " gap-2" : "")}>
          <div className="card-title">
            {props.task.title}
            <button onClick={handleEditTask} className="btn btn-ghost btn-circle btn-sm">
              <FiEdit2 />
            </button>
          </div>
          <p>
            {props.task.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;