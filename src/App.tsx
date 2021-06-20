import React, {useState} from 'react';
import './App.css';
import {CounterDisplay} from "./CounterDisplay";
import {Buttons} from "./Buttons";


function App() {
    const [count, setCount] = useState(0);

    const addToCounter = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    const removeToCounter = () => {
        setCount(0)
    }
    let maxNumber = 5

    return (
        <div className="app-wrapper">
            <CounterDisplay count={count}
                            maxNumber={maxNumber}/>
            <Buttons count={count}
                     removeToCounter={removeToCounter}
                     addToCounter={addToCounter}
                     maxNumber={maxNumber}/>
        </div>

    )
}


export default App;


