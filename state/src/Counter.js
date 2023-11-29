import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 0,
    };
  }

  increment = () => {
    this.setState({ nombre: this.state.nombre + 1 });
    console.log('  + ok');
    
  };

  decrement = () => {
    if (this.state.nombre > 0) {
        this.setState({ nombre: this.state.nombre - 1 });
        console.log('-ok');
    }
  };

  resetNombre = () => {
    this.setState({ nombre: 0 });
    console.log(' rest ok');
  };

  render() {
    return (
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <Button variant="danger" onClick={this.decrement}>  -   </Button>
        <span> {this.state.nombre} </span>
        <Button variant="success" onClick={this.increment}>  + </Button>
        <Button variant="primary" onClick={this.resetNombre}>   Reset </Button>
      </div>
    );
  }
}

export default Counter;