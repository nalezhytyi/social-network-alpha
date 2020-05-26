import React from "react";
import { Card, CardContent } from "@material-ui/core";
import s from './Message.module.css'


const Message = props => {
    return (
        <Card className={s.messagesItem}>
            <CardContent>
                {props.message}
            </CardContent>
        </Card>
    )
};

export default Message;
