import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthNum, required} from "../../../utilities/validators";
import {Textarea} from "../../common/RenderField/RenderField";


const MyPosts = props => {

    let postElements = [...props.posts].reverse().map(p => <Post message={p.message} like={p.like} key={p.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
    };

    return (
        <div className={s.my__posts}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};;

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLengthNum]} type="text" name="newPostBody" placeholder="Enter your text"/>
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    )
};

const AddPostReduxForm = reduxForm({form: "profileAddMessageForm"})(AddPostForm);

export default MyPosts;
