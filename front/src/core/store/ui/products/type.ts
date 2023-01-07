export type UIProductState = {
    productList: UIProduct[];
};

export type UIProduct = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    categoryName: string;
};
