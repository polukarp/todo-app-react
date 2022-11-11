import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const Tasks = ({ type }) => {
  const tasks =
    type === 'regular'
      ? useSelector((state: any) => state.task.value)
      : useSelector((state: any) => state.doneTask.value);

  return (
    <div className="">
      <div className="wrapper flex justify-center flex-wrap gap-6 items-start max-w-7xl mx-auto px-10">
        {tasks.length > 0 ? (
          tasks.map((task) => <Task key={task.id} task={task} type={type} />)
        ) : type === 'regular' ? (
          <h2>No tasks set yet...</h2>
        ) : (
          <h2>No tasks done yet...</h2>
        )}
      </div>
    </div>
  );
};

export default Tasks;
