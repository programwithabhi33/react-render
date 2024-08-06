import React, { useState } from 'react'
import ChildRender from './ChildRender';

const ParentRender = () => {
    const [number, setNumber] = useState(0);
    return (
        <>
        <button onClick={_=> setNumber(0)}>setParentNumber to 0</button>
        <button onClick={_=> setNumber(number + 1)}>Parent number: {number}</button>
            {number === 0 && <div>
                <ChildRender />
            </div>}
            {number === 1 && <span>
                <ChildRender />
            </span>}
        </>
    )
}

export default ParentRender
