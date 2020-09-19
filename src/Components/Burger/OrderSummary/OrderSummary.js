import React from 'react';
import CustomBtn from '../../UI/CustomButton/CustomButton';

function OrderSummary(props) {

    const ingredientSummary = Object.keys(props.ingredients).map(eachIng => <li>{eachIng.charAt(0).toUpperCase() + eachIng.slice(1, eachIng.length)}: {props.ingredients[eachIng]}</li>);

    return (
        <div className='orderSummary'>
            <h3> Your Order </h3>

            <p>Here are the Yummy contents of your burger:</p>
            {ingredientSummary}
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>


            <CustomBtn class={'orderCancel'}clicked={props.cancel}>Cancel</CustomBtn>
            <CustomBtn class={'orderPlace'}clicked={props.continue}>Continue</CustomBtn>
        </div>
    )
}

export default OrderSummary;