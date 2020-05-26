import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { AddMessageReduxForm } from "./Message/AddMessageForm";
import { Card, CardContent, Grid } from "@material-ui/core/";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogElements = state.dialogsArray.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messageElements = state.messagesArray.map(m => <Message key={m.id} message={m.message} />);
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    };

    return (
        <Grid container spacing={3} justify="flex-start">
            <Grid item xs={1} md={1} lg={1}>
                {dialogElements}
            </Grid>
            <Grid item xs={12} md={9} lg={8}>
                <CardContent>
                    {messageElements}
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </CardContent>
            </Grid>
        </Grid>
    )
}


export default Dialogs;
