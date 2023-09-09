import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Effects = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log("side effects")
    },[counter])
  return (
    <div>
        <div>
            <h3>{counter}</h3>
            <Button variant="success" onClick={()=>setCounter(counter +1)} >counter</Button>{' '}
        </div>
        <div>
            <h3>{counter1}</h3>
            <Button variant="success" onClick={()=>setCounter1(counter1 +1)} >counter</Button>{' '}
        </div>

    </div>
  )
}

export default Effects