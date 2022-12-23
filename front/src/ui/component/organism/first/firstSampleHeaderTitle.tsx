import React from "react";

export const FirstSampleHeaderTitle: React.FC<any> = (props) => {
    const { firstTitle } = props;
    return (
        <div>
            <div className="first-title">{firstTitle.title}</div>
        </div>
    );
};
