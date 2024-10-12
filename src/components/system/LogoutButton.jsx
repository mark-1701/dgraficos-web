import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ icon, linkTitle }) => {
  const navigate = useNavigate();
  return (
    <li>
      <a
        title={linkTitle}
        className={`flex items-center gap-3 text-white hover:bg-neutral-700`}
        onClick={e => {
          localStorage.removeItem('session');
          navigate('/');
        }}
      >
        <span className="material-symbols-outlined flex flex-none justify-center items-center h-14 w-14">
          {icon}
        </span>
        {linkTitle}
      </a>
    </li>
  );
};

export default LogoutButton;
