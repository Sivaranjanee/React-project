import React, { useEffect, useState } from 'react'

function Hook2() {

    const [count,setcount] = useState(0);

    const increment = ()=>{
        setcount(count +1);
    }

    useEffect(()=>{
        console.log("hi");
    },[count])
  return (
    <>
    <h1>useeffect state example</h1>
    <h2>{count}</h2>
    <button onClick={increment}>increment</button>
    </>
  )
}

export default Hook2