import React from "react";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {email, required} from "../../utilities/validators";
import {Input} from "../common/RenderField/RenderField";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div className={s.loginForm}>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder='Email' validate={[required, email]} name="email" type="email"
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder='Password' validate={[required]} name="password" type="password"
                           component={Input}/>
                </div>
                <div>
                    <Field component={Input} name="rememberMe" type="checkbox"/> remember me
                </div>
                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && <Field placeholder='Symbols from image' component={Input} name='captcha' validate={[required]}/>}
                {error && <div className={s.loginForm__error}>
                {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={s.loginBlock}>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {login})(Login);
