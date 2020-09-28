import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { AddMessageReduxForm } from './Message/AddMessageForm';
import { CardContent, Grid } from '@material-ui/core';
import s from './Dialogs.module.css';

const Dialogs = ({ dialogsPage, sendMessage }) => {
  let state = dialogsPage;
  let dialogElements = state.dialogsArray.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messageElements = state.messagesArray.map(m => <Message key={m.id} message={m.message} />);
  let addNewMessage = values => {
    sendMessage(values.newMessageBody);
    values.newMessageBody = '';
  };

  return (
    <Grid container spacing={3} justify='flex-start'>
      <div>{dialogElements}</div>
      <Grid item xs={9} md={9} lg={7}>
        <CardContent>
          {messageElements}
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Dialogs;
