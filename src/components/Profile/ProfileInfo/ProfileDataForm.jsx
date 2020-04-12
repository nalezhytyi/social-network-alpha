import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/RenderField/RenderField";
import {required} from "../../../utilities/validators";
import s from "./ProfileInfo.module.css"

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={s.edit__form_error}>
            {error}
        </div>}
        <div>
            <b>Full name :</b> <Field placeholder='Your full name' name='fullName' component={Input}/>
        </div>
        <div>
            <b>About me: <Field placeholder='Type something about you' validate={[required]} name='aboutMe' component={Textarea}/></b>
        </div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contacts}>
                <b>{key}:</b> <Field placeholder={key}   name={'contacts.' + key} component={Input}/>
            </div>
        })}
        <div>
            <div><b>Looking for a job:</b> <Field name='lookingForAJob'  component={Input}
                                                  type='checkbox'/></div>
            <div><b>Skills:</b> <Field placeholder='Your professional skills' validate={[required]} name='lookingForAJobDescription' component={Textarea}/></div>
        </div>
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm
