import React from "react";

export const FirstSampleMenu: React.FC<any> = (props) => {
    const { firstMenu, backButton } = props;
    return (
        <div>
            <div className="first-menu">
                <div>{firstMenu.buttonLabels.menu1}</div>
                <div>{firstMenu.buttonLabels.menu2}</div>
                <div>{firstMenu.buttonLabels.menu3}</div>
            </div>
            <button>{backButton.buttonLabels.back}</button>
        </div>
    );
};
