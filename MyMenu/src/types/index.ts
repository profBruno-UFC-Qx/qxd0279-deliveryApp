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