import React from "react"
import "./App.css"

//import DialogsContainer from "./components/Dialogs/DialogsContainer"
//import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import News from './components/News/News'
import Music from './components/Music/Music'
import Login from "./components/Login/Login"
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import {library} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faUserCircle,
    faComments,
    faNewspaper,
    faPlayCircle,
    faSlidersH,
    faRadiation,
    faUsers,
    faSignInAlt,
    faUser,
    faUpload,
} from '@fortawesome/free-solid-svg-icons'
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/WithSuspense";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from "./components/common/Theme/Theme";
const DialogsContainer = React.lazy(() => import(("./components/Dialogs/DialogsContainer")));
const UsersContainer = React.lazy(() => import(("./components/Users/UsersContainer")));

library.add(fab, faUserCircle, faComments, faNewspaper, faPlayCircle, faSlidersH, faRadiation, faUsers, faSignInAlt, faUser,faUpload);

class App extends React.Component {
    catchAllUnhandlesErrors = (reason, promise) => {
        alert('Some error')
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandlesErrors);
    }

    componentWillUnmount() {
        window.addEventListener('unhandledrejection', this.catchAllUnhandlesErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <ThemeProvider theme={Theme}>
            <div className="app-wrapper">
                <NavbarContainer/>
                <div className={this.props.drawer ? "app-wrapper-content_wide" : "app-wrapper-content"}>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={withSuspense(UsersContainer)
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
            </ThemeProvider>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    drawer: state.sidebar.drawer
});

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const JSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default JSApp;
