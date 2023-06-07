export interface BaseParams<IDType = number> {
    id: IDType
  }

  export interface Users {
    firstname?: string;
    lastname?: string;
    username: string;
    mobile?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    roleId: number;
    vender?: number;
    image?: string;
  }
 export interface CreateUser {
    firstname: string;
    lastname: string;
    username: string;
    mobile?: string;
    email: string;
    password: string;
    confirmPassword: string;
    roleId: number;
    vender?: number;
    image?: string;
  }
  export interface updateUser {
    firstname?: string;
    lastname?: string;
    username?: string;
    mobile?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    roleId?: number;
    vender?: number;
    image?: string;
  }
  
 export interface APIResponse<Data> {
    data: Data
    message: string
    count:number
  }
  
  export interface Pagination {
    page: number
    limit: number
    breed: DogBreed
  }
  
  export interface Empty {
  
  }
  
 export  type DogBreed = 'labrador' | 'german shepherd' | 'golden retriever'
  
 export  type User = BaseParams & Users