import React from 'react';
import logo from '../../Assets/Images/Logo.png';

const Logo = () => {
    return (
        <div className={'logoContainer'}>
            <img className = 'burgerLogo' src={logo} />
        </div>
        )
       
}

export default Logo;