import React from "react";
import s from './Post.module.css';
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Post = (props) => {
    return (
        <Card className={s.postCard}>
            <CardContent className={s.post}>
                <div className={s.postUser}>
                    <Avatar
                        src={props.profile.photos.small}
                        alt=""/>
                    <Typography color='textSecondary' className={s.postName}>{props.profile.fullName}</Typography>
                </div>
            </CardContent>
            <CardContent>
                {props.message}
            </CardContent>
            <CardContent>
                <Typography color="textSecondary" className={s.likeCount}>{props.like} Likes</Typography>
            </CardContent>
        </Card>
    )


};

export default Post
