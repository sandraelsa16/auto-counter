
import { useEffect, useState } from 'react'

import './App.css'

function App() {

 const[counter,setCounter]=useState(0)
 const [isRunning, setIsRunning] = useState(true);

 useEffect(() => {
  if (isRunning) {
      const intervalId = setInterval(() => {
          setCounter(prevCounter => prevCounter + 1);
      }, 1000);

      return () => clearInterval(intervalId);
  }
}, [isRunning]);

// Stop the counter
const stopCounter = () => {
  setIsRunning(prevIsRunning => !prevIsRunning);
};

// Reset the counter and restart
const resetCounter = () => {
  setCounter(0);
  setIsRunning(true);
};

  return (
    <>
      <div className='container'>
        <div className="counter-part">
            <p>{counter}</p>
            <div>
              <button onClick={stopCounter} >Pause</button>
              <button onClick={resetCounter}>Reset</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
