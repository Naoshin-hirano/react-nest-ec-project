import { fetchCategoryList, fetchProductList } from "core/api/top/service";
import { dispatch } from "core/store";
import { UICategoryAction } from "core/store/ui/category/actions";
import { UIProductAction } from "core/store/ui/products/actions";
import { GetCategory, GetProduct } from "./type";

export const getProductList = async () => {
    const response = await fetchProductList();
    const itemList = response.data.map((item: GetProduct) => {
        return {
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            image: item.image,
            categoryName: item.category.name,
        };
    });
    dispatch(UIProductAction.getProductListAction(itemList));
};

export const getCategoryList = async () => {
    const response = await fetchCategoryList();
    const categoryList = response.data.map((category: GetCategory) => {
        return {
            id: category.id,
            image: category.image,
            name: category.name,
            products: category.products,
        };
    });
    dispatch(UICategoryAction.getCategoryListAction(categoryList));
};
