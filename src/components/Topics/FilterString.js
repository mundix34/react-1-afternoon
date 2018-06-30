import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super()
        this.state={
            unfilteredArray:['Tadd','Todd','Ann'],
            userInput:'',
            filteredArray:[]

        }
    }
    updateUserInput(valuex){
        this.setState=({userInput:valuex})
    }
    filterNames(userInput) {
        var names = this.state.names;
        var filteredNames = [];
    
        for ( var i = 0; i < names.length; i++ ) {
          if ( names[i].includes(userInput) ) {
            filteredNames.push(names[i]);
          }
        }
    
        this.setState({ filteredNames: filteredNames });
      }
    
      render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
          </div>
        )
      }
    }
export default FilterString;