import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './Message.module.css'
import {Textarea} from "../../common/RenderField/RenderField";
import {Send} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.add__message}>
            <div className={s.messages__form}>
                <CardActions>
                    <Field fullWidth size='small' classname={s.textarea} component={Textarea} name="newMessageBody"
                           placeholder="Enter your message"/>
                </CardActions>
                <CardActions><IconButton edge="start" color='primary'
                                         type='submit'><Send/></IconButton>
                </CardActions>
            </div>
        </form>
    )
};
export const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


