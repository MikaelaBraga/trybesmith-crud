export interface IProduct {
  id: number,
}

export interface Product extends IProduct {
  name: string,
  amount: string,
}