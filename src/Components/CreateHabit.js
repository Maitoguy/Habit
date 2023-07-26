import React, { useState } from 'react';
import './components.css';

function CreateHabit({habit , setHabit}) {
  const [name , setName] = useState();
  const[days , setDays] = useState();
  const [count, setCount] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    var n = parseInt(days);
    var startDate = new Date();
    var streak = 0;
    var totalDays = 0;
    var record = new Array(n).fill(false);

    const newHabit = {
      name: name ,
      days: days,
      startDate: startDate,
      streak: streak,
      totalDays: totalDays,
      record: record,
      id: count
    }

    console.log(newHabit);
    console.log(habit);

    setCount(prevCount => prevCount + 1);
    setHabit([...habit , newHabit]);
    console.log(habit);

  }

    return (
      <div className="create-habit">
        <h1>Create Habit</h1>
        <form onSubmit={handleSubmit}>

          <div className='habit-input'>
            <label>Habit Name</label>
            <input value={name} required onChange={(e) => setName(e.target.value)} type='text'/>
          </div>

          <div className='habit-input'>
            <label>No. of Days</label>
            <input value={days} required onChange={(e) => setDays(e.target.value)} type='number' min={0} />
          </div>

          <button>Create Habit</button>

        </form>
        
      </div>
    );
  }
  
  export default CreateHabit;
  