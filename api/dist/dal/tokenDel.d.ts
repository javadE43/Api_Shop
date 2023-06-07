export interface DataToken {
    name: string;
    userId: number;
}
export declare const GetTokenByNameAndUserId: (userId: number, name: string) => Promise<boolean | DataToken>;
