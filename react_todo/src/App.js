import React, { useState, useEffect } from 'react';
import styles from './App.module.css';


function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange =(event)=>{
    setToDo(event.target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentItems)=>[toDo, ...currentItems]);
    setToDo("");
  }
    console.log(toDos);

  return (
    <div className="App">
     <header className={styles.title}>To Do List ({toDos.length})</header>
     <form onSubmit={onSubmit}>
     <input value={toDo} onChange={onChange} className={styles.text}type="text" placeholder="add To Do"></input>
     <button className={styles.submit}>submit</button>
     </form>
     <ul className={styles.list}>
      {toDos.map((item, index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
