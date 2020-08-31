import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    let ingredientArray = Object.keys(props.ingredients).map(ing => {
        return [...Array(props.ingredients[ing])].map((blank, amount) => {
            return <BurgerIngredient type={ing} key={ing + amount} />
        })
    }).reduce((arr, current) => {
      return arr.concat(current);
    });

    if (ingredientArray.length === 0) {
        ingredientArray = <p className={'addToppings'}> Please Add some ingredients</p>;
    }

    console.log(ingredientArray);
    
    return (
        <div className='burger'>
            <BurgerIngredient type={'bread-top'} />
            {ingredientArray}
            <BurgerIngredient type={'bread-bottom'} />
        </div>
    );


}

export default Burger;