// export interface IUserRequest {
//     name: string
//     email: string
//     password: string
//     isAdm: boolean
// }

// export interface IUser {
//     id: string
//     name: string
//     email: string
//     isAdm: boolean
//     createdAt: Date
//     updatedAt: Date
// }

// export interface IUserLogin {
//     email: string
//     password: string
// }

// export interface IUserUpdate {
//     name?: string
//     email?: string
//     password?: string
// }

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}
export interface IUserRequestReturnedClient {
  name?: string;
  email?: string;
  isAdm?: boolean;
  id?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IUpdateUserResponseClient {
  name?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdateRequest {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  isAdm?: boolean;
  isActive?: boolean;
}

export interface IuserRequestList {
  name: string;
  email: string;
  isAdm: boolean;
  id: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
