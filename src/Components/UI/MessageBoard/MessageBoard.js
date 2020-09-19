import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Auxiliary';

const MessageBoard = (props) => {
	return (
		<Aux>
			{props.show ? <BackDrop remove={props.cancel} /> : null}
			<div className = 'messageContainer'>
				{props.children}
			</div>
		</Aux>
	)
}

export default MessageBoard;