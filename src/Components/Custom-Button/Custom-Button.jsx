import React from "react";
import './Custom-Button.scss';




const CustomButton = ({children,isGoogleSignIN,...otherProps})=>(
    <button className={`${isGoogleSignIN ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
