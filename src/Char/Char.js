import React from 'react';

const Char = (props) => {

    const style = {
        display: 'inline-block',
        margin: '5px',
        border: '1px solid black',
        padding: '5px 25px',
        textTransform: 'uppercase',
        cursor: 'pointer'
    }

    return (
        <div style={style} onClick={props.clicked}>
            <p>{props.character}</p>
        </div>
    )
}

export default Char;