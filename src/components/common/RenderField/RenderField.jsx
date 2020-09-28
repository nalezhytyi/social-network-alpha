import React from "react";
import s from "./RenderField.module.css"
import TextField from "@material-ui/core/TextField";


const RenderField = ({ meta: { touched, error, warning }, children }) => {
    return (
        <div className={s.renderField + " " + (touched && error ? s.renderField__error : "")}>
            {children}
            {touched && ((error &&
                <span className={s.renderField__error}>
                        {error}
                </span>) || (warning && <span>{warning}</span>))}
        </div>

    )
};

export const Textarea = (props) => {
    const { input, meta, child, className, ...restProps } = props;
    return <RenderField {...props}>
        <TextField
            {...input}
            {...restProps}
            className={className}
            multiline
            variant="filled" />
    </RenderField>
};
export const Input = (props) => {
    const { input, meta, child, className, ...restProps } = props;
    return <RenderField {...props}>
        <TextField
            {...input}
            {...restProps}
            className={className}
            variant="outlined" />
    </RenderField>
};
export const RenderCheckbox = (props) => {
    const { input, meta, child, className, ...restProps } = props;
    return <RenderField {...props}>
        <input
            {...input}
            {...restProps}
            className={className} />
    </RenderField>
};





