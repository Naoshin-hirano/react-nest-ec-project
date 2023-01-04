import { fetchProductList } from "core/api/products";
import { dispatch } from "core/store";
import { UIProductAction } from "core/store/ui/products/actions";

export const getProductList = async () => {
    const response = await fetchProductList();
    dispatch(UIProductAction.getProductListAction(response.data));
};
