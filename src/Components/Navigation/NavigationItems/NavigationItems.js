import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className={'navLinks'}>
            <NavigationItem link='/' active={true}>Burger Builder</NavigationItem>
            <NavigationItem link='/' active={false} >Checkout</NavigationItem>
        </ul>
              
  );
}

export default NavigationItems;