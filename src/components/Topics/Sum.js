import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
        super()
        this.state={
            number1:0,
            number2:0,
            sum: null
        }
    }
    numberInput1(num){
        this.setState=( {number1:parseInt(num, 10) });
    }
    numberInput2(num){
        this.setState=( {number2:parseInt(num, 10) });
    }
    sumFunc(a,b){
        this.setState({sum: a + b});

    }
  render() {
      return (
          <div className="puzzleBox sumPB">
          <h4> Sum </h4>
          <input className="inputLine" onChange={ (e) => this.numberInput1(e.target.value)}></input>
          <input className="inputLine" onChange={ (e) => this.numberInput2(e.target.value)}></input>
          <button className="confirmationButton" onClick={ () =>this.sumFunc(this.state.number1,this.state.number2)}> Adds</button>
          <span className="resultsBox">Sum: {this.state.sum}</span>
             
          </div>
          )
      
    
  }
}

