import { createContext, useContext, useState } from 'react';
import React from 'react';
import Navbar from '../components/Navbar';
import Tasks from '../components/Tasks';
import { useDispatch, useSelector } from 'react-redux';

const Done = () => {
  const doneTasks = useSelector((state: any) => state.doneTask.value);

  const dispatch = useDispatch();

  return (
    <div className="app min-h-screen">
      <div className="wrapper max-w-7xl mx-auto">
        <Navbar />
        <Tasks type="done" />
      </div>
    </div>
  );
};

export default Done;
