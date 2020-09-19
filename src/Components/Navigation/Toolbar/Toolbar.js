import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
    return (
        <div className='toolBar'>
            <Logo height={'40px'} />

            <div>
               <NavigationItems />
            </div>
        </div>
        )
}

export default Toolbar;