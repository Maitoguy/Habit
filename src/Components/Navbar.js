import {Link} from 'react-router-dom';
import './components.css';


function Navbar() {
    return (
      <div className="navbar">
        <h1><Link to='/'> Habit Tracker </Link></h1>
        <button><Link to='/create-habit'>Create Habit</Link></button>
      </div>
    );
  }
  
  export default Navbar;
  