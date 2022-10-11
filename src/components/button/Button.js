import React from "react";

const Button = ({
    onClick,
    className,
    type = "button",
    bgColor = "primary",
    children,
}) => {
    let bgClassname = "bg-primary";
    switch (bgColor) {
        case "primary":
            bgClassname = "bg-primary";
            break;
        case "secondary":
            bgClassname = "bg-secondary";
            break;
        default:
            break;
    }
    return (
        <button
            onClick={onClick}
            className={`py-3 px-6 rounded-lg capitalize w-full mt-auto text-white ${bgClassname} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
