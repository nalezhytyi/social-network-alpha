import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.navigation}>
                <li className={s.logo}>
                    <NavLink to="/profile" className={s.navigationLink} activeClassName={s.active}>
                        <span className={s.linkText}>React app</span>
                        <FontAwesomeIcon className={s.navigationIcon} icon="radiation"/>

                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/profile" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="user-circle"/>
                        <span className={s.linkText}>Profile</span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/users" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="users"/>
                        <span className={s.linkText}>Users</span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/dialogs" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="comments"/>
                        <span className={s.linkText}>Messages</span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/news" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="newspaper"/>
                        <span className={s.linkText}>News</span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/music" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="play-circle"/>
                        <span className={s.linkText}>Music</span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    {props.isAuth ?
                        <NavLink to="/profile" className={s.navigationLink} activeClassName={s.active}>
                            <FontAwesomeIcon className={s.navigationIcon} icon="user"/>
                            <span className={s.linkText}>{props.login}</span>
                            <span><button className={s.linkText} onClick={props.logout}>Log out</button></span>
                        </NavLink>
                        :
                        <NavLink to="/login" className={s.navigationLink} activeClassName={s.active}>
                            <FontAwesomeIcon className={s.navigationIcon} icon="sign-in-alt"/>
                            <span className={s.linkText}>Login</span>
                        </NavLink>}
                </li>
            </ul>
        </nav>
    )

};


export default Navbar;
