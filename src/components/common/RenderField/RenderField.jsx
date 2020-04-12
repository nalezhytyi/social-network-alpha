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


