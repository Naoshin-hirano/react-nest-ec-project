import { useMatch } from "@tanstack/react-location";
import { UICategorySelector } from "core/store/ui/category/selector";
import { UIProductSelector } from "core/store/ui/products/selector";
import { useSelector } from "react-redux";

export const useCreateProps = () => {
    const categoryState = useSelector(UICategorySelector);
    const productState = useSelector(UIProductSelector);
    const {
        params: { id },
    } = useMatch();

    return {
        productList: productState?.productList,
        categoryList: categoryState?.categoryList,
        paramsId: id,
    };
};
