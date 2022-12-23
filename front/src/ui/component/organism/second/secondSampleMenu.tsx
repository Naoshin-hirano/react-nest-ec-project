import React from "react";

export const SecondSampleMenu: React.FC<any> = (props) => {
    const { secondMenu, backButton } = props;
    return (
        <div>
            <div className="second-menu">
                <div>{secondMenu.buttonLabels.menu1}</div>
                <div>{secondMenu.buttonLabels.menu2}</div>
                <div>{secondMenu.buttonLabels.menu3}</div>
            </div>
            <button>{backButton.buttonLabels.back}</button>
        </div>
    );
};
