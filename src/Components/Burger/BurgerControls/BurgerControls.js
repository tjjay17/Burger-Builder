import React from 'react';
import BurgerControl from './BurgerControl';

const BurgerControls = (props) => {
    let toppings = [
        { label: 'Lettuce', type: 'lettuce' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' }
    ];


    return (
        <div className='Controls'>
            <p className={'price'}> Current Price: ${props.price.toFixed(2)}</p>

            {toppings.map(ingredient => (
                <BurgerControl addTopping={() => props.added(ingredient.type)} removeTopping={() => props.removed(ingredient.type)} key={ingredient.label} label={ingredient.label} />
                )  
            )}
            
            <button onClick={props.purchased} className={props.purchasable ? 'orderNow' : 'greyOut'}>Order Now</button>
        </div>
    )
}

export default BurgerControls;