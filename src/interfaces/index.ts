export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface Iuser {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface Iorder {
  id: number;
  userId: number;
}