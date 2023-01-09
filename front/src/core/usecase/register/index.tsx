import { postUserAccount } from "core/api/register";

export const registerUserAccount = async (data: any) => {
    const result = await postUserAccount(data);
    return result;
};
