import React from 'react';
import './Nav.scss';
import { NavLink } from "react-router";
class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <NavLink to="/">home</NavLink>
                <NavLink to="/todo">todo</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/user">Users</NavLink>
            </div>
        )
    }
}
export default Nav