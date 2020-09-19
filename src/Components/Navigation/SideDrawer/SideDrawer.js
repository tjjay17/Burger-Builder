import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo';

const SideDrawer = (props) => {
    return (
        <div className={'sideDrawer'}>
            <nav>
                <Logo height={'50px'} />
                <NavigationItems />
            </nav>
        </div>
    );
}

export default SideDrawer;