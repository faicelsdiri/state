import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import FormNombre from './FormNombre';
import Counter from './Counter';

function App() {
let [show,setShow] = useState(false)
  return (
  <div style={{textAlign:'center' , paddingTop : '100px'}} >
  <Button variant="primary" onClick={()=> setShow(!show)}> {show? "Hide Numbre":"Show Numbre"} </Button>
   {/* appel fonction FORMNombre */}
  {show && <FormNombre/>}

  {/* appel Class COUNTER */}
  {show && <Counter/>}
  </div>
  );
}

export default App;
