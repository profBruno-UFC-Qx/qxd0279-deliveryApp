export interface User {
  id: number,
  username: string,
  name: string,
  email: string,
  jwt: string,
  blocked: boolean,
  role: {
    name: string
  }
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
