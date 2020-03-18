import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavigationBar() {
    return(
        <nav>
            <NavLink style={{ marginLeft: '0px'}} activeClassName="active" className="inactive" 
                    to="/" exact>Home</NavLink>
            <NavLink activeClassName="active" className="inactive"
                    to="/createPost">Create post</NavLink>
        </nav>
    )
}