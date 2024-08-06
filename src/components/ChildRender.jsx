import React, { useState } from 'react'

const ChildRender = () => {
    const [counter, setCounter] = useState(0);
  return (
    <>
        <button onClick={_=> setCounter(counter + 1)}>{counter}</button> 
    </>
  )
}

export default ChildRender
