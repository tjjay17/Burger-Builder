import React from 'react';

const BackDrop = (props) => {
    return (
        <div onClick={props.remove} className='backDrop'>
        </div>
 )
}

export default BackDrop;