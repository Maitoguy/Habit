import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './components.css';

function HabitDetail({ habit }) {
  const { habitId } = useParams();
  const [dateArray, setDateArray] = useState([]);
  const habitIndex = parseInt(habitId, 10);
  const result = habit.find((habitItem) => habitItem.id === habitIndex);
  var currentDate = new Date();

  function updateRecord(date) {

    var index = Math.floor((date - result.startDate) / (86400 * 1000))  ;

    result.record[index] = true;
    // console.log(result.record);
    
    let streak = 0;
    let totalDays = 0;

    for ( let i = 0 ; i < result.record.length ; i++){
      if(result.record[i]){
        totalDays++
      }else{
        streak = 0;
      }
    }
    
    result.streak = streak;
    result.totalDays = totalDays;

    console.log(result.streak , result.totalDays , result.days);

  }

  function viewDetails(){
    const newDateArray = [currentDate]; 
    for (let i = 1; i < 7; i++) {
      var date = currentDate.getDate() + i;
      var newDate = new Date();
      newDate.setDate(date);
      newDateArray.push(newDate);
    }

    setDateArray(newDateArray); 
  }

  return (
    <div className="habit-details">
      <button onClick={viewDetails}>View Habit</button>
      {dateArray.map((dateItem, index) => (
        <div key={index} className="week-render">
          <p>{dateItem.getDate()} / {dateItem.getMonth() + 1} / {dateItem.getFullYear()}</p>
          <button onClick={() => updateRecord(dateItem)}>Completed</button> 
          <button>Not Completed</button>

        </div>
      ))}
    </div>
  );
}

export default HabitDetail;
