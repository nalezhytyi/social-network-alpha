import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './Message.module.css'
import { Textarea } from "../../common/RenderField/RenderField";
import { Send } from "@material-ui/icons";
import { IconButton, CardActions, CardContent } from "@material-ui/core/";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messagesForm}>
                <CardContent className={s.messagesForm_input}>
                    <Field
                        fullWidth
                        size='small'
                        component={Textarea}
                        name="newMessageBody"
                        placeholder="Enter your message" />
                </CardContent>
                <CardActions>
                    <IconButton
                        edge="start"
                        color='primary'
                        type='submit'><Send />
                    </IconButton>
                </CardActions>
            </div>
        </form>
    )
};
export const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);


