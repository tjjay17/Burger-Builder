import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';

const BurgerBuilder = (props) => {
    const [ingList, updateIngredients] = useState({
        lettuce: 0,
        meat: 0,
        cheese: 0
    });

    return (
        <Auxiliary>
            <div><Burger ingredients={ingList}/></div>
            <div>Burger Controls</div>
        </Auxiliary>
    );
}

export default BurgerBuilder;