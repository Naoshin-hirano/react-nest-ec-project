import React from "react";
import { TopTitle } from "ui/component/organism/top/topTitle";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <TopTitle {...props} />
        </div>
    );
};
