import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function About() {
    const Navigate = useNavigate();
  return (
    <div>
      <h1>This is About page</h1>
         <Button onClick={()=> Navigate(-1)}>
          Home</Button> 
    </div>
  )
}

export default About
