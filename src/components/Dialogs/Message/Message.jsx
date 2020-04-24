import React from "react";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import s from './Message.module.css'


const Message = (props) => {

    return (
        <Card className={s.messages__item}>
            <CardContent>
            {props.message}
            </CardContent>
        </Card>
    )
};

export default Message;
