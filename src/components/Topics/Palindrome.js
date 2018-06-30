import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super()
    this.state={
        userInput: '',
        palindrome: ''

    }
    }
    updatesInput(val){
        this.setState({
            userInput:val
        })

    }
    changesPalindrome(userInput){
        var forwards=userInput;
        var backwards=userInput;
        backwards=backwards.split('');
        backwards=backwards.reverse();
        backwards=backwards.join('');
        if (forwards===backwards){
            this.setState=({palindrome:'true'})
        } else {
            this.setState=({palindrome:'false'})
        }

    }

  render() {
      return (
          <div className="puzzleBox filterStringPB" >
          <h4>Palindrome</h4>
          <input className="inputLine" onChange={(e) =>this.updatesInput(e.target.value)}></input>
          <button className="confirmationButton" onClick={()=>this.changesPalindrome(this.state.userInput)}>Check</button>
          <span className="resultBox">Palindrome: { this.state.palindrome }</span>
        
          </div>)
      
    
  }
}

export default Palindrome;