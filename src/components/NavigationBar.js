import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { switchTheme } from '../redux/actions'

function NavigationBar(props) {
    return(
        <nav>
            <NavLink style={{ marginLeft: '0px'}} activeClassName="active" className="inactive" 
                    to="/" exact>Home</NavLink>
            <NavLink activeClassName="active" className="inactive"
                    to="/createPost">Create post</NavLink>
            <p id='theme-switch' onClick={ () => props.switchTheme()}>Switch the theme</p>
        </nav>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        switchTheme: () => dispatch(switchTheme())
    }
}

export default connect(null, mapDispatchToProps)(NavigationBar)