import React from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Toolbar from './Navigation/Toolbar/Toolbar';


const Layout = (props) => (
    <Auxiliary>
        <div>
            <Toolbar />
        </div>

        <main className={'layoutContainer'}>
            {props.children}
        </main>
       
    </Auxiliary>
        )

export default Layout;