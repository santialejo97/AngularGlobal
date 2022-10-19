export interface UserLogin {
  email: string;
  password: string;
}

export interface UserDB {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface RespDB {
  ok: boolean;
  userDB: UserDB;
  token: string;
}
