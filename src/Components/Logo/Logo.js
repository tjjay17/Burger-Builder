import React from 'react';
import logo from '../../Assets/Images/Logo.png';

const Logo = (props) => {
    return (
        <div className={'logoContainer'}>
            <img style={{height:props.height}} className = 'burgerLogo' src={logo} />
        </div>
        )
       
}

export default Logo;