import React from 'react';
import Post from './Post/Post';
import { AddPostReduxForm } from "./Post/AddPostForm";
import { Card, CardContent, Typography } from "@material-ui/core/";

const MyPosts = props => {
    let postElements = [...props.posts].reverse().map(p =>
        <Post
            profile={props.profile}
            message={p.message}
            like={p.like}
            key={p.id} />);
    let addNewPost = (values) => {
        if (values.newPostBody === undefined || values.newPostBody === '') {
            alert('You must enter some text!');
            return
        }
        props.addPost(values.newPostBody);
        values.newPostBody = '';
    };

    return (
        <div>
            <CardContent>
                <Typography variant='h5' color="textSecondary">
                    My posts
                </Typography>
            </CardContent>
            <Card>
                <AddPostReduxForm profile={props.profile} onSubmit={addNewPost} />
            </Card>
            {postElements}
        </div>
    )
}

export default MyPosts;
