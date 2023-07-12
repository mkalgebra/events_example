import './App.css';
import { useState } from 'react';
import Dummy from './components/Dummy';

function App() {
  const [search, setSearch] = useState('');
  const [isVisible, setIsVisible] = useState(false)
  
  function handleChange(e){
    setSearch(e.target.value)
  }

  function handleClick(){
    setIsVisible(!isVisible)
  }

  return (
    <div className="App">
      <input value={search} onChange={(e)=>handleChange(e)} placeholder="Say something"></input>
      <p>{search}</p>
      <button onClick={handleClick}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible ? <p>Secret</p> : <></>}
      <br></br>
      <Dummy/>
    </div>
  );
}

export default App;
