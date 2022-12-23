import React from "react";
import { Template } from "ui/component/template/second";
import { useCreateProps } from "./presentation";

export const SocondSamplePage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
