import React from 'react';
import styles from './Person.css';

const person = (props) => {

    const style = {

    };

    return (
    <div className={styles.Person} style={style}>
        <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
        <p className="children-props">{props.children}</p>
        <input  type="text" onChange={props.changed} value={props.name} />
    </div>
)
}

export default person;