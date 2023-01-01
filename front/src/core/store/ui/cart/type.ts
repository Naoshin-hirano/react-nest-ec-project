export type UICart = {
    cartProducts: UICartProduct[];
    totalQty: number;
    subTotal: number;
    totalAmount: number;
    deliveryCharge: number;
};

export type UICartProduct = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    totalPrice: number;
};
