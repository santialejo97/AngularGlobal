export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export interface UserDB {
  _id: string;
  name: string;
  email: string;
}

export interface RespDB {
  ok: boolean;
  msg?: string;
  userDB: UserDB;
  token: string;
}

export interface RespDBRegister {
  ok: boolean;
  msg?: string;
  user: UserDB;
  token: string;
}

export interface ValidToken {
  ok: boolean;
  token: string;
}
