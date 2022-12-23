import React from "react";

export const SecondSampleHeaderTitle: React.FC<any> = (props) => {
    const { secondTitle } = props;
    return (
        <div>
            <div className="second-title">{secondTitle.title}</div>
        </div>
    );
};
