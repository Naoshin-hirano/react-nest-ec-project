import React from "react";

export const Button: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
    children,
    ...otherProps
}) => {
    return (
        <p className="btn">
            <span>
                <input {...otherProps} type="submit" />
            </span>
        </p>
    );
};
