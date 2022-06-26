export interface ICardParams {
    id?: number;
    image?: string;
    product?: string;
    price?: number;
    introduction?: string;
}

export interface ICardCreateParams {
    image: string;
    product: string;
    price: number;
    introduction: string;
}