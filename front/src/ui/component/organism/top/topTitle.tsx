import React from "react";

export const TopTitle: React.FC<any> = (props) => {
    return (
        <div>
            <div className="top-title">{props.topTitle.title}</div>
            <div>{props.topMenu.buttonLabels.menu1}</div>
        </div>
    );
};
