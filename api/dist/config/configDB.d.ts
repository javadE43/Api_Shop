interface Pool {
    max: number;
    min: number;
    acquire: number;
    idle: number;
}
interface ConfigDB {
    [name: string]: {
        username: string;
        password: string;
        database: string;
        host: string;
        dialect: string;
        pool: Pool;
    };
}
export declare const configDB: ConfigDB;
export {};
