export interface ICardParams {
    id?: number;
    image?: string;
    product?: string;
    price?: number;
    introduction?: string;
}

export interface ICardCreateParams extends ICardParams {
    image: string;
    product: string;
    price: number;
    introduction: string;
}