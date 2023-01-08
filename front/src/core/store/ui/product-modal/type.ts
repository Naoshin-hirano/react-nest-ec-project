export type UIModal = {
    productData: UIProductData;
    isOpen: boolean;
};

export type UIProductData = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};
