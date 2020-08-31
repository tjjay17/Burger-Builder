import React from 'react';
import  Auxiliary from '../hoc/Auxiliary';

const Layout = (props) => (
    <Auxiliary>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>

        <main className={'layoutContainer'}>
            {props.children}
        </main>
       
    </Auxiliary>
        )

export default Layout;