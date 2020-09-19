import React from 'react';

const NavigationItem = (props) => {
    return (
         <li className={'navLink'}>
            <a className={props.active? 'active':null}href={props.link}>{props.children}</a>
        </li>
    );
}

export default NavigationItem;