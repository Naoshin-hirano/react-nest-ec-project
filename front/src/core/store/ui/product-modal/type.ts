export type UIModal = {
    productData: UIProductData;
    isOpen: boolean;
};

export type UIProductData = {
    title: string;
    description: string;
    price: number;
    image: string;
};
