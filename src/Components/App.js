import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreateHabit from './CreateHabit';
import HabitDetail from './HabitDetail';

function App() {
  const [habit , setHabit] = useState([]);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home habit={habit} setHabit={setHabit}/>}/>
        <Route path="/view-habit/:habitId" element={<HabitDetail habit={habit} />} />
        <Route path="/create-habit" element={<CreateHabit habit={habit} setHabit={setHabit} />} />
      </Routes>
      
    </div>
  );
}

export default App;
