import { dispatch } from "core/store";
import { UICartAction } from "core/store/ui/cart/actions";
import { UICartProduct } from "core/store/ui/cart/type";

// カートへ商品追加
export const addProductToCart = (
    cartProducts: UICartProduct[],
    product: UICartProduct
) => {
    // 追加商品が重複しているかの判定
    const sameItem = cartProducts.find((item) => item.id === product.id);
    // 追加商品がすでにカート内に重複している場合
    if (sameItem) {
        const newCart = cartProducts.map((item: UICartProduct) => {
            // item1つ1つ見るためのif
            // 商品ID同じ：数量だけ増やす
            // 商品ID違う：配列要素追加
            if (item.id === product.id) {
                let itemQty = item.quantity;
                let totalPrice = item.totalPrice;
                itemQty += product.quantity;
                totalPrice *= itemQty;
                return {
                    ...item,
                    quantity: itemQty,
                    totalPrice: totalPrice,
                };
            } else {
                return item;
            }
        });
        dispatch(UICartAction.updateCartProducts([...newCart]));
    } else {
        dispatch(UICartAction.updateCartProducts([...cartProducts, product]));
    }
};

// 指定商品をカートから削除
export const removeProductFromCart = (
    cartProducts: UICartProduct[],
    productId: number
) => {
    //カート内商品リストを削除
    const newCart = cartProducts.filter((item) => item.id !== productId);
    dispatch(UICartAction.updateCartProducts(newCart));
};

// 指定商品の数量のincrement
export const changeCartQty = (
    cartProducts: UICartProduct[],
    productId: number,
    type: string
) => {
    const newCart = cartProducts.map((item) => {
        if (item.id === productId) {
            let itemQty = item.quantity;
            let totalPrice = item.totalPrice;
            if (type === "plus") {
                if (itemQty < 10) {
                    itemQty++;
                    totalPrice = item.price * itemQty;
                }
            }
            if (type === "minus") {
                if (itemQty > 1) {
                    itemQty--;
                    totalPrice = item.price * itemQty;
                }
            }
            return { ...item, quantity: itemQty, totalPrice: totalPrice };
        } else {
            return item;
        }
    });
    dispatch(UICartAction.updateCartProducts(newCart));
};

// カートの中身の変化に伴い合計金額と合計数量を再計算
export const getTotalResult = (cartProducts: UICartProduct[]) => {
    const totalAmount = cartProducts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
    }, 0);
    const totalQty = cartProducts.reduce((cartQty, cartItem) => {
        return (cartQty += cartItem.quantity);
    }, 0);
    dispatch(
        UICartAction.getTotalResult({
            totalAmount,
            totalQty,
        })
    );
};
