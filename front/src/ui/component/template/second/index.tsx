import React from "react";
import { SecondSampleHeaderTitle } from "ui/component/organism/second/secondSampleHeaderTitle";
import { SecondSampleMenu } from "ui/component/organism/second/secondSampleMenu";

export const Template: React.FC<any> = (props) => {
    return (
        <div>
            <SecondSampleHeaderTitle {...props} />
            <SecondSampleMenu {...props} />
        </div>
    );
};
