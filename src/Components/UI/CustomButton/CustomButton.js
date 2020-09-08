import React from 'react';

const CustomBtn = (props) => {
    return <button onClick={props.clicked} className={props.class}>{props.children}</button>
}

export default CustomBtn;