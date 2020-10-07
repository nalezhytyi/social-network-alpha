import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { getUserProfile } from '../../redux/profile-reducer';
import { compose } from 'redux';
import { setDrawer } from '../../redux/sidebar-reducer';

const NavbarContainer = ({ setDrawer, isAuth, login, profile, drawer, logout }) => {
  const handleChange = () => {
    setDrawer();
  };

  return (
    <Navbar
      drawer={drawer}
      isAuth={isAuth}
      login={login}
      logout={logout}
      profile={profile}
      handleChange={handleChange}
    />
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.myProfile,
    drawer: state.sidebar.drawer,
  };
};

export default compose(connect(mapStateToProps, { logout, getUserProfile, setDrawer }))(
  NavbarContainer
);
