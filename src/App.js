import React from "react"
import "./App.css"

//import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import News from './components/News/News'
import Music from './components/Music/Music'
import Login from "./components/Login/Login"
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faUserCircle,
    faComments,
    faNewspaper,
    faPlayCircle,
    faSlidersH,
    faRadiation,
    faUsers,
    faSignInAlt,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import(("./components/Dialogs/DialogsContainer")));
const ProfileContainer = React.lazy(() => import(("./components/Profile/ProfileContainer")));

library.add(faUserCircle, faComments, faNewspaper, faPlayCircle, faSlidersH, faRadiation, faUsers, faSignInAlt, faUser);

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path='/'
                        render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>
                               }/>
                        <Route path='/news'
                               render={() => <News/>}/>
                        <Route path='/music'
                               render={() => <Music/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                        <Route path='*'
                               render={() => <div>404 page no found</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const JSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default JSApp;
