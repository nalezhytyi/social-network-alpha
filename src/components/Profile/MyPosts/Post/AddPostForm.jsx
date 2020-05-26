import React from "react";
import s from "./Post.module.css"
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/RenderField/RenderField";
import { CardActions, CardContent, IconButton, Avatar } from "@material-ui/core/";
import { Send } from "@material-ui/icons";

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postForm}>
            <CardContent>
                <Avatar src={props.profile.photos.small} alt="User photo" />
            </CardContent>
            <CardContent className={s.postForm_input}>
                <Field
                    fullWidth={true}
                    size='small'
                    component={Textarea}
                    type="text"
                    name="newPostBody"
                    placeholder="Make a new post" />
            </CardContent>
            <CardActions>
                <IconButton
                    edge="start"
                    color='primary'
                    type='submit'>
                    <Send />
                </IconButton>
            </CardActions>
        </form>
    )
};


export const AddPostReduxForm = reduxForm({ form: "profileAddMessageForm" })(AddPostForm);


