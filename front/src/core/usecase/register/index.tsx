import { postUserAccount } from "core/api/register/service";

export const registerUserAccount = async (data: any) => {
    const result = await postUserAccount(data);
    return result;
};
