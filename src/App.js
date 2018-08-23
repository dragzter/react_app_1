import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 29},
      { name: "Manu", age: 24},
      { name: "Stephanie", age: 32}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    // DON't DO THIS this.state.persons[0].name = "Maximillian";
    this.setState({persons: [
        { name: newName, age: 29},
        { name: "Manu", age: 24},
        { name: "Steph", age: 36}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
        { name: "Max", age: 29},
        { name: event.target.value, age: 24},
        { name: "Steph", age: 36}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React.js App.</h1>
        <p>This is really working.</p>

        <button onClick={() => this.switchNameHandler('Robert!!')}>Switch Names</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Stanley!!')}
          changed={this.nameChangedHandler} > My Hobbies: Racing
          
        </Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />

      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'does this work now?'));
  }
}

export default App;
