import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {getUserProfile} from "../../redux/profile-reducer";
import {compose} from "redux";
import {setDrawer} from "../../redux/sidebar-reducer";

class NavbarContainer extends React.Component {

    handleChange = () => {
        this.props.setDrawer()
    };

    render() {
        return <Navbar {...this.props}
                       handleChange={this.handleChange}
                       drawer={this.props.drawer}/>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.auth.myProfile,
        drawer: state.sidebar.drawer
    };
};

export default compose(connect(mapStateToProps, {logout, getUserProfile, setDrawer}))(NavbarContainer);
