import React, { useState } from 'react'

function Hook1() {

    const [count,setcount] = useState(0);

    const increment = ()=>{
        setcount(count +1);
    }
    const decrement = ()=>{
        setcount(count -1);
    }
    const reset = ()=>{
        setcount(0);
    }

    console.log("hi");

  return (
    <>
    <h1>usestate hook example</h1>
    <h2>{count}</h2>
    <div>
    <button onClick={increment} className='btn btn-primary'>Increment</button>
    <button onClick={decrement} className='btn btn-danger'>Decrement</button>
    <button onClick={reset} className='btn btn-warning'>Reset</button>
    </div>
    </>
  )
}

export default Hook1