import React from 'react';
import PropType from 'prop-types';

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type){
        case ('bread-top'):
            ingredient = <div className={'breadTop'}></div>;
            break;
        case ('bread-bottom'):
            ingredient = <div className={'breadBottom'}></div>;
            break;
        case ('meat'):
            ingredient = <div className={'meat'}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={'cheese'}></div>;
            break;
        case ('lettuce'):
            ingredient = <div className={'lettuce'}></div>;
            break;
        default:
            ingredient = null;
    }

    BurgerIngredient.propType = {
        type: PropType.string.isRequired
    };

    return ingredient;

}

export default BurgerIngredient;