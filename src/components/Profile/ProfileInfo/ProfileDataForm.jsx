import React from "react";
import {Field, reduxForm, submit} from "redux-form";
import {Input, Textarea, RenderCheckbox} from "../../common/RenderField/RenderField";
import {required} from "../../../utilities/validators";
import s from "./ProfileInfo.module.css"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

const ProfileDataForm = ({profile, handleSubmit, error, cancelEditMode, logout}) => {
    return <form onSubmit={handleSubmit}>
        <DialogTitle dividers><Typography color='textSecondary'>EDIT INFORMATION</Typography></DialogTitle>
        <DialogContent dividers>
            <Grid container direction="row">
                <Grid item xs={12} md={6} lg={6} className={s.profile__firstItem}>
                    <DialogContent className={s.profileDataForm__container}>
                        {error && <div className={s.edit__form_error}>
                            {error}
                        </div>}
                        <DialogContentText>
                            <Field fullWidth placeholder='Your full name' name='fullName' component={Input}
                                   label='Full name'/>
                        </DialogContentText>
                        <DialogContentText>
                            <Field fullWidth classname={s.fieldAboutMe}
                                   placeholder='Type something about you'
                                   validate={[required]}
                                   name='aboutMe' component={Textarea}
                                   label='About me'/>
                        </DialogContentText>
                        <DialogContentText>
                            <Field fullWidth label='Professional skills'
                                   placeholder='Your professional skills'
                                   validate={[required]}
                                   name='lookingForAJobDescription'
                                   component={Textarea}/>
                        </DialogContentText>
                        <DialogContentText className={s.lookingForAJob}>
                            <Typography>Looking for a job :</Typography><Field name='lookingForAJob'
                                                                               component={RenderCheckbox}
                                                                               type='checkbox'/>
                        </DialogContentText>
                    </DialogContent>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <DialogContent>
                        {Object.keys(profile.contacts).map(key => {
                            return <div key={key} className={s.contacts}>
                                <DialogContentText> <Field fullWidth placeholder={key} label={key}
                                                           name={'contacts.' + key}
                                                           component={Input}/></DialogContentText></div>
                        })}
                    </DialogContent>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions className={s.buttonContainer}>
            <Button className={s.button} disableElevation color='secondary' onClick={logout}>Logout</Button>
            <Button className={s.button} disableElevation variant='contained' color='secondary' onClick={cancelEditMode}>Cancel</Button>
            <Button className={s.button} disableElevation variant='contained' color='primary' type={submit}>Save</Button>
        </DialogActions>
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm
