import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDoneTask, deleteTask, setDoneTask, setTask } from '../store';

const Task = ({ task, type }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    type === 'regular' ? dispatch(deleteTask(task)) : dispatch(deleteDoneTask(task));
  };

  const handleComplete = () => {
    dispatch(setDoneTask(task));
    dispatch(deleteTask(task));
  };

  return (
    <div className="card w-96 bg-primary text-primary-content mb-4 max-h-[500px] h-fit overflow-auto break-words">
      <div className="card-body">
        <h2 className="card-title max-h-full">{task.title}</h2>
        <p>{task.description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete()} className="btn">
            Delete
          </button>
          {type !== 'done' && (
            <button onClick={() => handleComplete()} className="btn btn-secondary">
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
