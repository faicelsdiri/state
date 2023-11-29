import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function FormNombre() {
let [nombre,setNombre] = useState(0)
  const Increment = () => {    setNombre(nombre + 1);  };
  const decrement = () => {   
    if (nombre>0) {
        setNombre(nombre - 1);
    }   };
  const resetnumbre = () => {    setNombre(0);  };
  return (
    <div  style={{textAlign:'center' , paddingTop : '100px'}}>
    <Button variant="danger" onClick={decrement}>-</Button>
     <span> {nombre} </span>
    <Button variant="success" onClick={Increment}>+</Button>
    <Button variant="primary"onClick={resetnumbre}>Reset</Button>
    </div>
  );
}

export default FormNombre;
