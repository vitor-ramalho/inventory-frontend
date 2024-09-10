import api from "./api";

export type User = {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

export async function login({ email, password }: { email: string; password: string }): Promise<{ user: User; access_token: string }> {
  const response = await api.post('/auth/user/login', { email, password });

  return response.data;
}