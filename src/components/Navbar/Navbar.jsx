import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userPhoto from "../../assets/images/avatar.png";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = props => {
    return (
        <nav className={props.drawer ? s.wideNav : s.nav}>
            <ul className={s.navigation}>
                <li className={s.logo}>
                    <div className={s.navigationLink}>
                        <NavLink to="/profile" className={s.navigationLink} activeClassName={s.active}>
                            <span className={s.linkText}>
                                React app
                            </span>
                        </NavLink>
                        <IconButton
                            onClick={props.handleChange}
                            edge="start"
                            className={s.navigationIcon}
                            color="inherit"
                            aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </div>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/profile" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="user-circle" />
                        <span className={s.linkText}>
                            Profile
                        </span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/users" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="users" />
                        <span className={s.linkText}>
                            Users
                        </span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/dialogs" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="comments" />
                        <span className={s.linkText}>
                            Messages
                        </span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/news" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="newspaper" />
                        <span className={s.linkText}>
                            News
                        </span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    <NavLink to="/music" className={s.navigationLink} activeClassName={s.active}>
                        <FontAwesomeIcon className={s.navigationIcon} icon="play-circle" />
                        <span className={s.linkText}>
                            Music
                        </span>
                    </NavLink>
                </li>
                <li className={s.navigationItem}>
                    {props.isAuth ?
                        <NavLink to="/profile" className={s.navigationLink} activeClassName={s.active}>
                            <img
                                className={s.navigationIcon}
                                src={!props.profile ? userPhoto : (!props.profile.photos.small ? userPhoto : props.profile.photos.small)}
                                alt='avatar' />
                            <span className={s.linkText}>
                                {props.login}
                            </span>
                            <span className={s.logout}>
                                <IconButton
                                    color='secondary'
                                    aria-label="Logout"
                                    onClick={props.logout}>
                                    <ExitToAppIcon />
                                </IconButton>
                            </span>
                        </NavLink>
                        :
                        <NavLink to="/login" className={s.navigationLink} activeClassName={s.active}>
                            <FontAwesomeIcon className={s.navigationIcon} icon="sign-in-alt" />
                            <span className={s.linkText}>
                                Login
                            </span>
                        </NavLink>}
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;
