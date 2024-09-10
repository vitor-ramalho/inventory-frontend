import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarLinkGroupProps {
  links: { path: string; label: string; icon: ReactNode }[];
  activeCondition: boolean;
}

const SidebarLinkGroup = ({ links, activeCondition }: SidebarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ul>
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
              window.location.pathname.includes(link.path) &&
              'bg-graydark dark:bg-meta-4'
            }`}
            onClick={handleClick}
          >
            {link.icon}
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinkGroup;