export interface IUserParams {
    id?: number;
    username?: string;
    password?: string;
}

export interface IUserCreateParams extends IUserParams {
    username: string;
    password: string;
}