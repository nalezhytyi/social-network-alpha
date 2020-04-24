import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/RenderField/RenderField";
import s from './Post.module.css'

import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import {Send} from "@material-ui/icons";



const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <CardActions className={s.postForm}>
                <CardActions><Avatar
                    src={props.profile.photos.small}
                    alt=""/>
                </CardActions>
                <CardActions><Field size='small' component={Textarea} type="text"
                                    name="newPostBody" placeholder="Make a new post"/></CardActions>
                <CardActions><IconButton edge="start" color='primary'
                                         type='submit'><Send/></IconButton></CardActions>
            </CardActions>
        </form>
    )
};


export const AddPostReduxForm = reduxForm({form: "profileAddMessageForm"})(AddPostForm);


