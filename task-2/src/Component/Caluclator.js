
import React, { Component } from 'react';
import './styles.css'; // Make sure to import your CSS file
import graycolor from './gray.png';
import whitecolor from './white.png';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '', // The input expression
      output: '', // The result
    };
  }

  changeColor=() =>{
    this.setState({
        backgroundColor1:'gray',
        backgroundColor2:'#101d23'
    })
  }

  changeColorr=() =>{
    this.setState({
        backgroundColor1:'aliceblue',
        backgroundColor2:'#18185c'
    })
  }

  handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(this.state.input);
        this.setState({ output: result });
      } catch (error) {
        this.setState({ output: 'Error' });
      }
    } else if (value === 'AC') {
      this.setState({
        input: '',
        output: '',
      });
    } else if (value === 'DEL') {
      this.setState((prevState) => ({
        input: prevState.input.slice(0, -1),
      }));
    } else {
      this.setState((prevState) => ({
        input: prevState.input + value,
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="output" style={{ backgroundColor: this.state.backgroundColor2}}>
          <div className="left">
          <img src={graycolor} alt="dark" id="img1" onClick={this.changeColor}  />
        <img src={whitecolor} alt="light" id="img2" onClick={this.changeColorr} />


          </div>
          <div className="right">
            <div className="po">{this.state.input}</div>
            <div className="co">{this.state.output}</div>
          </div>
        </div>

        <button className="span-2" onClick={() => this.handleButtonClick('AC')} style={{ backgroundColor: this.state.backgroundColor1 }}>
          AC
        </button>
        <button onClick={() => this.handleButtonClick('DEL')} style={{ backgroundColor: this.state.backgroundColor1 }}>DEL</button>
        <button onClick={() => this.handleButtonClick('/')} style={{ backgroundColor: this.state.backgroundColor1 }}>/</button>
        <button onClick={() => this.handleButtonClick('7')} style={{ backgroundColor: this.state.backgroundColor1 }}>7</button>
        <button onClick={() => this.handleButtonClick('8')} style={{ backgroundColor: this.state.backgroundColor1 }}>8</button>
        <button onClick={() => this.handleButtonClick('9')} style={{ backgroundColor: this.state.backgroundColor1 }}>9</button>
        <button onClick={() => this.handleButtonClick('*')} style={{ backgroundColor: this.state.backgroundColor1 }}>x</button>
        <button onClick={() => this.handleButtonClick('4')} style={{ backgroundColor: this.state.backgroundColor1 }}>4</button>
        <button onClick={() => this.handleButtonClick('5')} style={{ backgroundColor: this.state.backgroundColor1 }}>5</button>
        <button onClick={() => this.handleButtonClick('6')} style={{ backgroundColor: this.state.backgroundColor1 }}>6</button>
        <button onClick={() => this.handleButtonClick('-')} style={{ backgroundColor: this.state.backgroundColor1 }}>-</button>
        <button onClick={() => this.handleButtonClick('1')} style={{ backgroundColor: this.state.backgroundColor1 }}>1</button>
        <button onClick={() => this.handleButtonClick('2')} style={{ backgroundColor: this.state.backgroundColor1 }}>2</button>
        <button onClick={() => this.handleButtonClick('3')} style={{ backgroundColor: this.state.backgroundColor1 }}>3</button>
        <button onClick={() => this.handleButtonClick('+')} style={{ backgroundColor: this.state.backgroundColor1 }}>+</button>
        <button onClick={() => this.handleButtonClick('.')} style={{ backgroundColor: this.state.backgroundColor1 }}>.</button>
        <button onClick={() => this.handleButtonClick('0')} style={{ backgroundColor: this.state.backgroundColor1 }}>0</button>
        <button className="span-2" onClick={() => this.handleButtonClick('=')} style={{ backgroundColor: this.state.backgroundColor1 }}>
          =
        </button>

       
      </div>
    );
  }
}

export default Calculator;
