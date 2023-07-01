export declare const conditionGetOrder: (token: string | null, userId: number | null, orderId: number | null) => {
    token: string;
    userId?: undefined;
    orderId?: undefined;
} | {
    userId: number;
    token?: undefined;
    orderId?: undefined;
} | {
    orderId: number;
    token?: undefined;
    userId?: undefined;
} | undefined;
