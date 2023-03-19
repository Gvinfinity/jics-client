/* eslint-disable react/prop-types */
import React from "react";
import "./Input.css";

const Input = (props) => {
    return (
        <input
            className="Input"
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
};

export default Input;
