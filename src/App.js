import './App.css';
import React, { useContext } from 'react';
import { useTress } from './';


function App(){
  const {trees} = useTress();

  return(
    <div>
      <h1>Trees I've Heard of </h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
