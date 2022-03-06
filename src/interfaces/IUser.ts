export interface IUser {
  id: number,
}

export interface User extends IUser {
  username: string,
  classe: string,
  level: number,
  password: string
}