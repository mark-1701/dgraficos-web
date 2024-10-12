import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 shadow bg-gray-100 sm:px-8">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-14 w-14 mr-2" />
        <div className="hidden sm:flex gap-4">
          <a href="#contact" className="text-gray-800 hover:text-gray-600">
            Productos
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600">
            Nosotros
          </a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600">
            Contacto
          </a>
        </div>
      </div>
      <div className="flex gap-3">
        <Link>
          <span className="material-symbols-outlined flex justify-center text-4xl text-gray-700">
            shopping_cart
          </span>
        </Link>

        <Link>
          <span className="material-symbols-outlined flex justify-center text-4xl text-gray-700">
            account_circle
          </span>
        </Link>
        {/* <Link
          // to={`login`}
          className="btn"
        >
          Iniciar Sesión
        </Link> */}
        {/* <button className="underline hidden sm:block">Registrarse</button> */}
      </div>
    </div>
  );
};

export default Navbar;
