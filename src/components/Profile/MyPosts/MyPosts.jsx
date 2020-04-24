import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddPostReduxForm} from "./Post/AddPostForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const MyPosts = props => {

    let postElements = [...props.posts].reverse().map(p => <Post profile={props.profile} message={p.message}
                                                                 like={p.like} key={p.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
        values.newPostBody = '';
    };

    return (
        <div>
            <CardContent>
                <Typography variant='h5' color="textSecondary">My posts</Typography>
            </CardContent>
                <Card className={s.addposr}>
                    <AddPostReduxForm profile={props.profile} onSubmit={addNewPost}/>
                </Card>

            {postElements}
        </div>
    )
};
export default MyPosts;
