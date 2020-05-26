import React from "react";
import s from './Login.module.css';
import { Field, reduxForm } from "redux-form";
import { email, required } from "../../utilities/validators";
import { Input } from "../common/RenderField/RenderField";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { Button, Container, Avatar, Typography, Grid, Link, Checkbox, FormControlLabel } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs" className={s.loginForm}>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </div>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Field margin="normal"
                       required
                       fullWidth
                       id="email"
                       autoFocus
                       autoComplete="email"
                       label="Email Address"
                       validate={[required, email]}
                       name="email"
                       type="email"
                       component={Input} />
                <Field margin="normal"
                       required
                       autoComplete="current-password"
                       fullWidth
                       label="Password"
                       validate={[required]}
                       name="password"
                       type="password"
                       component={Input} />
                <FormControlLabel
                    control={<Field
                        component={Checkbox}
                        name="rememberMe"
                        type="checkbox" />}
                    label='Remember me' />
                {captchaUrl &&
                <div>
                    <img src={captchaUrl} alt="captcha" />
                    <Field placeholder='Symbols from image' component={Input} name='captcha' validate={[required]} />
                </div>}
                {error &&
                <div className={s.loginForm__error}>
                    {error}
                </div>}
                <Button
                    className={classes.submit}
                    fullWidth
                    disableElevation
                    color='primary'
                    variant='contained'
                    type='submit'>
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link target='_blank' href="https://social-network.samuraijs.com/login" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link target='_blank' href="https://social-network.samuraijs.com/signUp" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ login, isAuth, captchaUrl }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div className={s.loginBlock}>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
