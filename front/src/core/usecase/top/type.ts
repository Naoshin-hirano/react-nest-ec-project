import { UICategoryProduct } from "core/store/ui/category/type";

export type GetProduct = {
    categoryId: number;
    createdAt: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
    updatedAt: string;
    category: GetCategory;
};

export type GetCategory = {
    id: number;
    image: string;
    name: string;
    products: UICategoryProduct[];
    createdAt: string;
    updatedAt: string;
};
