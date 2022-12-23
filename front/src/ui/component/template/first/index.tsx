import React from "react";
import { FirstSampleHeaderTitle } from "ui/component/organism/first/firstSampleHeaderTitle";
import { FirstSampleMenu } from "ui/component/organism/first/firstSampleMenu";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <FirstSampleHeaderTitle {...props} />
            <FirstSampleMenu {...props} />
        </div>
    );
};
