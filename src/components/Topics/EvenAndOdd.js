import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state={
          names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
          evenArray:[],
          oddArray:[],
          userInput: ''
        }
      }
      handleInput(string1){
          console.log(string1)
          this.setState({userInput:string1})


      }
      solveArrays(){
          let even=[]
          let odd=[]
          console.log(this.state.userInput)
          
      this.state.userInput.split(',').map(element=>{
          element%2===0? even.push(element):odd.push(element)
                    
      })
      this.setState({
          EvenArray:even.join(','),
          OddArray:odd.join(',')
      })

      }
         
  render(){
      return (
          <div className="puzzleBox evenAndOddPB">
          <h4> Even and Odd</h4>
          <input className="inputLine" onChange={e=>{this.handleInput(e.target.value);
          }}></input>
          <button className="confirmationButton" onClick={()=>{this.solveArrays()}} > Filter </button>
          <span className="resultsBox">Evens: {this.state.EvenArray}</span>
          <span className="resultsBox filterStringRB"> Odds: {this.state.OddArray}</span>
              
          </div>)
      
    
  }
}

export default EvenAndOdd;
