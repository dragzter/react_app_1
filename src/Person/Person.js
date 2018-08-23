import React from 'react';


const person = (props) => {
    return (
    <div>
        <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
        <p className="children-props">{props.children}</p>
        <input  type="text" onChange={props.changed} />
    </div>
)
}

export default person;