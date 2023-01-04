import { UIProductSelector } from "core/store/ui/products/selector";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as Usecase from "../../../../core/usecase/products";

export const useCreateProps = () => {
    const productState = useSelector(UIProductSelector);

    useEffect(() => {
        Usecase.getProductList();
    }, []);

    return {
        productList: productState?.productList,
    };
};
