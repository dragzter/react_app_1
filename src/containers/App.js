import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

import Aux from '../hoc/Auxiliary';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor", props)
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()")
  }

  componentDidMount() {
     console.log("[App.js] Inside componentDidMount()")
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log("UPDATE [App.js] inside shouldComponentUpdate", nextProps, nextState)
  //     return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log("UPDATE [App.js] inside componentWillUpdate", nextProps, nextState)
  }

  componentDidUpdate() {
      console.log("UPDATE [App.js] inside componentDidUpdate()")
  }

  state = {
    persons: [
      { id:"ah", name: "Max", age: 29},
      { id:"kj", name: "Manu", age: 24},
      { id:"h9", name: "Stephanie", age: 32},
    ],
    otherState: 'some other value',
    showPersons: false,
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

  render() {

    console.log("[App.js] Inside render()")

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

      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
        <Cockpit 
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler} />

        {persons}
    </Aux>
    );
  }
}

export default withClass(App, classes.App);