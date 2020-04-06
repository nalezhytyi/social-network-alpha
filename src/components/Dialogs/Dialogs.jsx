import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/RenderField/RenderField";
import {maxLengthNum, required} from "../../utilities/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsArray.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = state.messagesArray.map(m => <Message key={m.id} message={m.message}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div>{dialogElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLengthNum]} name="newMessageBody" placeholder="Enter your text"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;