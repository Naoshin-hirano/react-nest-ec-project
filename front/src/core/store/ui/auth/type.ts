export type UIAuth = {
    authState: UIAuthUser;
};

export type UIAuthUser = {
    id: string;
    username: string;
    status: boolean;
    imageName: string;
};
