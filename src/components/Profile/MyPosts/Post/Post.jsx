import React from "react";
import s from './Post.module.css';
import userPhoto from './../../../../assets/images/user.png'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={userPhoto}
                alt=""/>
            {props.message}
            <div className={s.likeCount}><span>{props.like} Likes</span></div>
        </div>

    )


};

export default Post