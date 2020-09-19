import React from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';


const Layout = (props) => (
    <Auxiliary>
        <div>
            <Toolbar />
            <SideDrawer />
        </div>

        <main className={'layoutContainer'}>
            {props.children}
        </main>
       
    </Auxiliary>
        )

export default Layout;