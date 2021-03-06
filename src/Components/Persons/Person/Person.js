import React, {Component} from 'react';
import styles from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js] Inside constructor", props)
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log("[Person.js] Inside componentWillMount()")
    }


    componentDidMount() {
        console.log("[Person.js] Inside componentDidMount()")
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
        
    }

    focus() {
        this.inputElement.current.focus();
    }

    render () {
        console.log("[Person.js] Inside render()")
        return (
            <Aux>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
                <p className="children-props">{this.props.children}</p>
                <input
                    ref={ this.inputElement } 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        )
    }   
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, styles.Person );