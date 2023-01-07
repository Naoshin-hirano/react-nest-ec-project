export type UICategoryState = {
    categoryList: UICategory[];
};

export type UICategory = {
    id: number;
    image: string;
    name: string;
    products: UICategoryProduct[];
};

export type UICategoryProduct = {
    categoryId: number;
    createdAt: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
    updatedAt: string;
};
