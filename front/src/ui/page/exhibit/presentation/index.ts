export type SUBMIT_DATA = {
    title: string;
    description: string;
    category: string;
    price: string;
    // file: any;
};

export const useCreateProps = () => {
    const registerProductInfo: SUBMIT_DATA = {
        title: "",
        description: "",
        category: "選択してください",
        price: "",
        // file: null,
    };
    return {
        registerProductInfo,
    };
};
