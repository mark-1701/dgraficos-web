import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { useRef } from 'react';
import logo from '/src/assets/logo.png';

function Navbar() {
  const navigate = useNavigate();
  const menuRight = useRef(null);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const items = [
    {
      label: 'Opción',
      items: [
        {
          label: 'Iniciar Sesión',
          icon: 'pi pi-user',
          command: handleLoginClick,
        }
      ]
    }
  ];

  return (
    <div className="divider-x flex justify-between items-center w-full h-20 shadow bg-gray-100">
      <div className="flex items-center gap-4">
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="h-14 w-14 mr-2" />
        </Link>
        <div className="hidden sm:flex gap-4">
          <Link to={'/products'} className="text-gray-800 hover:text-gray-600">
            Productos
          </Link>
          <HashLink
            to={'/#about'}
            className="text-gray-800 hover:text-gray-600"
          >
            Nosotros
          </HashLink>
          <HashLink
            to={'/#contact'}
            className="text-gray-800 hover:text-gray-600"
          >
            Contacto
          </HashLink>
        </div>
      </div>
      <div className="flex gap-3">
        <Link to={'/cart'}>
          <span className="material-symbols-outlined flex justify-center text-4xl text-gray-700">
            shopping_cart
          </span>
        </Link>
        <span
          className="material-symbols-outlined flex justify-center text-4xl text-gray-700 cursor-pointer"
          onClick={event => menuRight.current.toggle(event)}
          aria-controls="popup_menu_right"
          aria-haspopup
        >
          account_circle
        </span>
        <Menu
          model={items}
          popup
          ref={menuRight}
          id="popup_menu_right"
          popupAlignment="right"
        />
      </div>
    </div>
  );
}

export default Navbar;
