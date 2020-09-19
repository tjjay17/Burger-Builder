import React, { useState,useEffect } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BurgerControls/BurgerControls';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import MessageBoard from '../../Components/UI/MessageBoard/MessageBoard';
import axios from '../../Axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/ErrorHandler';

const BurgerBuilder = (props) => {

    let orderSummary;
    const INGREDIENT_PRICES = {
        lettuce: 0.30,
        cheese: 0.40,
        meat: 0.75
    };

    const [ingList, updateIngredients] = useState(
        {
            ingredients:null,
            
            price: 1.25,
            purchasable:false,
            purchased: false,
            isLoading:false
        }
    );

//    const [error, setError] = useState({
 //       error: null
 //   });

    useEffect(() => {
        axios.get('https://burger-builder-6353a.firebaseio.com/ingredients.json')

            .then(res => {
                console.log('triggering the then block')
                updateIngredients(prevState => (
                    {
                        ...prevState,
                        ingredients: res.data
                    }
                ));
            })

            .catch(error => {});
    },[]);
   
  

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
                isLoading: prevValue.isLoading,
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
                    isLoading: prevValue.isLoading,
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
                    isLoading: prevValue.isLoading,
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
                isLoading: prevValue.isLoading,
                purchased: false

            }
        ));
    }

    function Continue() {
        //removePurchased();
        //alert('u bought it !')

        updateIngredients(prevState => (
            {
                ...prevState,
                isLoading:true
            }
        ));

        const data = {
            ingredients: ingList.ingredients,
            price: ingList.price.toFixed(2),
            customer: {
                name: 'Thomas TheTrain',
                address: {
                    country: 'Canada',
                    street: '123 Spooner Street'
                },
            },
            email: 'dummy@dummy.com',
            deliveryMethod:'Fast!'
        }

        axios.post('/orders.json', data)
            .then(response => (
                updateIngredients(prevState => (
                    {
                        ...prevState,
                        isLoading: false,
                        purchased:false
                    }
                )
                )))

            .catch(error => (
                updateIngredients(prevState => (
                    {
                        ...prevState,
                        isLoading: false
                    }
                ))
            ));
    }

   

    let burger = <Spinner />

  //  if (error) {
   //     burger = <MessageBoard show>{error.error}</MessageBoard>
   // }

    if (ingList.ingredients) {
         orderSummary = <OrderSummary cancel={removePurchased} continue={Continue} ingredients={ingList.ingredients} price={ingList.price} />
        burger = (
            <Auxiliary>
                <div className='burgerContainer'>
                    <Burger ingredients={ingList.ingredients} />
                </div>

                <div>
                    <BurgerControls purchasable={ingList.purchasable} ingredients={ingList.ingredients} purchased={setPurchased} price={ingList.price} added={addTopping} removed={removeTopping} />
                </div>
            </Auxiliary>
        )
    }

    if (ingList.isLoading) {
        orderSummary = <Spinner />
    } 



    return (
        <Auxiliary>

            {ingList.purchased ? < MessageBoard cancel={removePurchased} show={ingList.purchased}>
                {orderSummary}
                                 </MessageBoard> : null}
            {burger}
           
        </Auxiliary>
);

}
export default errorHandler(BurgerBuilder,axios);