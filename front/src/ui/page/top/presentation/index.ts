import { UICategorySelector } from "core/store/ui/category/selector";
import { UIProductSelector } from "core/store/ui/products/selector";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as Usecase from "../../../../core/usecase/top";

export const useCreateProps = () => {
    const categoryState = useSelector(UICategorySelector);
    const productState = useSelector(UIProductSelector);

    useEffect(() => {
        Usecase.getProductList();
        Usecase.getCategoryList();
    }, []);

    return {
        productList: productState?.productList,
        categoryList: categoryState?.categoryList,
    };
};
