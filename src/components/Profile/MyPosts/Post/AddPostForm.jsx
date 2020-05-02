import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/RenderField/RenderField";
import s from './Post.module.css'
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import {Send} from "@material-ui/icons";
import CardContent from "@material-ui/core/CardContent";


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postForm}>
            <CardContent>
                <Avatar src={props.profile.photos.small} alt=""/>
            </CardContent>
            <CardContent className={s.postForm_input}>
                <Field fullWidth={true} size='small' component={Textarea} type="text" name="newPostBody"
                       placeholder="Make a new post"/>
            </CardContent>
            <CardActions>
                <IconButton edge="start" color='primary' type='submit'><Send/></IconButton>
            </CardActions>
        </form>
    )
};


export const AddPostReduxForm = reduxForm({form: "profileAddMessageForm"})(AddPostForm);


