import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const [count, setCount]=useState(0);
  const Navigate = useNavigate();
  //let count = 0;

  const increment = ()=>{
    //count +=1;
    setCount(count+1);
  }

  const decrement =()=>{
    //count-=1;
    setCount(count-1);
  }
  return (
    <div>
      <h1>Homepage</h1>
      <Button variant="primary" onClick={() => Navigate("/about")}>About
      </Button>

      <div>
        <h1>My Counter</h1>
        <p>This is my {count}</p>
        <button onClick={decrement} className="button">-</button>
        <button onClick={increment} className="button">+</button>
      </div>
    </div>
  )
}
