import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageReduxForm} from "./Message/AddMessageForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsArray.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = state.messagesArray.map(m => <Message key={m.id} message={m.message}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    };

    return (
            <Grid container spacing={3} justify="center" >
                <Grid item xs={12} md={4} lg={1}>
                    <Card>
                        <CardContent>{dialogElements}</CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                    <Card>
                        <CardContent>
                            {messageElements}
                            <AddMessageReduxForm onSubmit={addNewMessage}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
    )
};


export default Dialogs;