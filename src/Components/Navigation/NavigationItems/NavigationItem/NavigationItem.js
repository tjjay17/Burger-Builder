import React from 'react';

const NavigationItem = (props) => {
    <li>
        <a href={props.link}>{props.children}</a>
    </li>
}

export default NavigationItem;