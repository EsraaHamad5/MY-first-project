import React from 'react';
import './App.css';
import StudentTable from './StudentTable'; 
import gif from './assets/gif.gif';

function App() {
  return (
    <div className="App">
      <img src={gif} alt='photo'/>
      <StudentTable /> 
    </div>
  );
}

export default App;

