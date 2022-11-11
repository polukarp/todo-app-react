import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTask } from '../store';

const Input = ({}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="flex items-end max-w-screen flex-wrap gap-8 mb-10 justify-center">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What are your plans?</span>
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Type here"
          value={title}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Type here"
          value={description}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button
        onClick={() => {
          if (title.length) {
            setTitle('');
            setDescription('');
            dispatch(setTask({ id: Date.now(), title: title, description: description }));
          }
        }}
        className="btn btn-secondary btn-wide">
        Set
      </button>
    </div>
  );
};

export default Input;
