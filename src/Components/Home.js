import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';

function Home({ habit, setHabit }) {
  function deleteHabit(id) {
    // Implement your delete logic here
    console.log(`Deleting habit with ID: ${id}`);
  }

  return (
    <div className="home">
      {habit.map((habitItem) => (
        <div key={habitItem.id}>
          <h2>{habitItem.name}</h2>
          <p>{habitItem.totalDays} / {habitItem.days}</p>
          <p><h2>Streak:</h2>{habitItem.streak}</p>
          <button onClick={() => deleteHabit(habitItem.id)}>Delete</button>
          <Link to={`view-habit/${habitItem.id}`}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
