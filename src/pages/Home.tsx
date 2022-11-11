import React from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Tasks from '../components/Tasks';

const Home = ({}) => {
  return (
    <div className="app min-h-screen">
      <div className="wrapper max-w-7xl mx-auto">
        <Navbar />
        <Input />
        <Tasks type="regular" />
      </div>
    </div>
  );
};

export default Home;
