import {BsJournalPlus} from 'react-icons/bs';

const NewTaskButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-ghost normal-case gap-2">
      <BsJournalPlus className='text-2xl'/>
      <span>New Task</span>
    </button>
  );
};

export default NewTaskButton;