import { useLocation, Link } from 'react-router-dom';

const SystemSidebarlink = ({ link, icon, linkTitle }) => {
  return (
    <li>
      <Link
        title={linkTitle}
        to={link}
        className={`flex items-center gap-3 text-white hover:bg-neutral-700`}
      >
        <span className="material-symbols-outlined flex flex-none justify-center items-center h-14 w-14">
          {icon}
        </span>
        {linkTitle}
      </Link>
    </li>
  );
};

export default SystemSidebarlink;
