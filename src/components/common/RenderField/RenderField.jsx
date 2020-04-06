import React from "react";
import s from "./RenderField.module.css"


const RenderField = ({input, meta: {touched, error, warning}, children}) => {
    return (
        <div className={s.renderField + " " + (touched && error ? s.renderField__error : "")}>
            {children}
            {touched && ((error &&
                <div><span className={s.renderField__error}>{error}</span></div>) || (warning &&
                <span>{warning}</span>))}
        </div>

    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <RenderField {...props}><textarea {...input} {...restProps}/></RenderField>
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <RenderField {...props}><input {...input} {...restProps}/></RenderField>
};

/*
export const Textarea = ({input, label, type, meta: {touched, error, warning}, ...props}) =>
    (
        <div className={s.renderField}>
            <label className={s.renderField__label}>{label}</label>
            <div className={s.renderField__main}>
                <textarea
                    className={s.renderField__main_textarea + " " + (touched && error ? s.renderField__main_textarea_error : " ")} {...input} {...props}
                    type={type}/>
                {touched && ((error &&
                    <div><span className={s.renderField__main_error}>{error}</span></div>) || (warning &&
                    <span>{warning}</span>))}
            </div>
        </div>
    );

export const Input = ({input, label, type, meta: {touched, error, warning}, ...props}) =>
    (
        <div className={s.renderField}>
            <label className={s.renderField__label}>{label}</label>
            <div className={s.renderField__main}>
                <input
                    className={s.renderField__main_textarea + " " + (touched && error ? s.renderField__main_textarea_error : " ")} {...input} {...props}
                    type={type}/>
                {touched && ((error &&
                    <div><span className={s.renderField__main_error}>{error}</span></div>) || (warning &&
                    <span>{warning}</span>))}
            </div>
        </div>
    );
*/

