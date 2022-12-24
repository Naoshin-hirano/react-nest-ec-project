import React from "react";
import { Template } from "ui/component/template/profile";
import { useCreateProps } from "./presentation";

export const ProfilePage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
