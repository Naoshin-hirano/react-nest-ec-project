import React from "react";
import { ConfirmExhibitItemInfo } from "ui/component/organism/confirm-exhibit";

// export type CategoryPageProps = {
//     productList: UIProduct[];
//     categoryList: UICategory[];
//     paramsId: string;
// };

export const Template: React.FC<any> = (props) => {
    return <ConfirmExhibitItemInfo {...props} />;
};
