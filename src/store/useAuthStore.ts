import { create } from 'zustand';
import { User } from '../services/auth';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  user: User | null;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  setToken: (token: string) => { localStorage.setItem('token', token); set({ token }); },
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  setUser: (user: User) => { localStorage.setItem('user', JSON.stringify(user)); set({ user }); },
  isAuthenticated: !!localStorage.getItem('token'),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useAuthStore;