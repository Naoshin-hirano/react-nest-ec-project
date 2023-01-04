export type UIProductState = {
    productList: UIProduct[];
};

export type UIProduct = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: string;
    updatedAt: string;
};
