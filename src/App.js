import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/ValidationComponent.js';
import Person from './Person/Person.js';
import Char from './Char/Char.js';

class App extends Component {

  state = {
    persons: [
      { id:"ah", name: "Max", age: 29},
      { id:"kj", name: "Manu", age: 24},
      { id:"h9", name: "Stephanie", age: 32},
      { id:"i0", name: "Wenzel", age: 22}
    ],
    otherState: 'some other value',
    showPersons: false,
    userInput: ''

  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  inputChangeHandler = (event) => {

    this.setState({
      userInput: event.target.value
    })

  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
      character={ch}
      key={index}
      clicked={() => this.deleteCharHandler(index)}/>
    });

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />;
          })}

        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am a React.js App.</h1>
        <p className={classes.join(' ')}>This is really working.</p>

        <input
        onChange={(event) => this.inputChangeHandler(event)}
        value={this.state.userInput}
         />
        <p>{this.state.userInput}</p>
        <p className="counter">{this.state.userInput.length}</p>
        <ValidationComponent validator={this.state.lengthVar > 5 ? 'Long enough' : 'too short!'}/>
        {charList}

        <button onClick={this.togglePersonHandler} style={style} > Toggle Persons </button>
        {persons}

      </div>
    );

  }
}

export default App;
