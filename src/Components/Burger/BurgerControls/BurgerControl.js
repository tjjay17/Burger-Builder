import React from 'react';

const BurgerControl = (props) => {
    return (
        < div className = 'controlContainer'>
            <p className = 'controlLabel'>{props.label}</p>
            <button onClick={props.removeTopping} className = 'remove'>Remove</button>
            <button onClick={props.addTopping} className = 'add'>Add</button>
        </div>
    )
}

export default BurgerControl;