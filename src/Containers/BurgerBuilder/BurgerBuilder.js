import React, { useState,useEffect } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BurgerControls/BurgerControls';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import MessageBoard from '../../Components/UI/MessageBoard/MessageBoard';

const BurgerBuilder = (props) => {

    const INGREDIENT_PRICES = {
        lettuce: 0.30,
        cheese: 0.40,
        meat: 0.75
    };

   

    const [ingList, updateIngredients] = useState(
        {
            ingredients:
            {
                cheese: 0,
                lettuce: 0,
                meat:0
            },
            
            price: 1.25,
            purchasable:false,
            purchased: false
        }
    );

   
  

    function addTopping(ingredient) {
        let newAmount = ingList.ingredients[ingredient] + 1;
        let newPrice = INGREDIENT_PRICES[ingredient];

        return updateIngredients(prevValue => (
            {
                ingredients:
                {
                    ...prevValue.ingredients,
                    [ingredient]: newAmount
                },

                price: prevValue.price + newPrice,
                purchasable: true,
                purchased:prevValue.purchased
            }                 
        ));   
    }

    function removeTopping(ingredient) {
        if (ingList.ingredients[ingredient] > 0) {
            let newAmount = ingList.ingredients[ingredient] - 1;
            let newPrice = INGREDIENT_PRICES[ingredient];

            return updateIngredients(prevValue => (
                {
                    ingredients:
                    {
                        ...prevValue.ingredients,
                        [ingredient]: newAmount
                    },

                    price: prevValue.price - newPrice,
                    purchasable: prevValue.purchasable,
                    purchased: prevValue.purchased
                }
            ));
        } 
    }

    const setPurchased = () => {
        if (ingList.purchasable) {
            return updateIngredients(prevValue => (
                {
                    ingredients:
                    {
                        ...prevValue.ingredients
                    },

                    price: prevValue.price,
                    purchasable: prevValue.purchasable,
                    purchased: true

                }
            ));
    }
    }

    const removePurchased = () => {
        return updateIngredients(prevValue => (
            {
                ingredients:
                {
                    ...prevValue.ingredients
                },

                price: prevValue.price,
                purchasable: prevValue.purchasable,
                purchased: false

            }
        ));
    }

    function Continue() {
        removePurchased();
        alert('u bought it !');
    }



    return (
        <Auxiliary>

            {ingList.purchased ? < MessageBoard cancel={removePurchased} show={ingList.purchased}>
                <OrderSummary cancel={removePurchased} continue={Continue} ingredients={ingList.ingredients} price={ingList.price} />
                                 </MessageBoard> : null}

            <div className='burgerContainer'>
                <Burger ingredients={ingList.ingredients} />
            </div>

            <div>
                <BurgerControls purchasable={ingList.purchasable} ingredients={ingList.ingredients} purchased={setPurchased} price={ingList.price} added={addTopping} removed={removeTopping} />
            </div>
        </Auxiliary>
);

}
export default BurgerBuilder;