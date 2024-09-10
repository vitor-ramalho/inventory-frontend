
import { ReactNode } from 'react';
import { FaUsers, FaProductHunt, FaShoppingCart,  FaBox, FaChartBar } from 'react-icons/fa';

export interface Link {
  path: string;
  label: string;
  icon: ReactNode;
}
export const links: Link[] = [
  { path: '/dashboard', label: 'Dashboard', icon: <FaChartBar /> },
  { path: '/users', label: 'Usuários', icon: <FaUsers /> },
  { path: '/products', label: 'Produtos', icon: <FaProductHunt /> },
  { path: '/sales', label: 'Vendas', icon: <FaShoppingCart /> },
  { path: '/inventory', label: 'Estoque', icon: <FaBox /> },
];