import React, { useState } from "react"

useState

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleSubmit = ()=>{
        setCounter(1);
        console.log("counter: ", counter)
    }
    
    return (
        <>
            <h3>Counter</h3>
            <div>{counter}</div>
            <button onClick={_=> setCounter(counter+1)}>Count</button>
            <button onClick={handleSubmit}>Send</button>
        </>
    )
}

export default React.memo(Counter)