interface Role {
    role: string;
    permission: number;
}
export declare const createAccessToken: (username: string, role: Role) => string;
export declare const createRefreshToken: (username: string, role: Role) => string;
export {};
