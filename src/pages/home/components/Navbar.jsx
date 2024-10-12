import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 shadow bg-gray-100 sm:px-8">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-32 mr-4" />
        <div className="hidden sm:flex gap-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Inicio
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
        <Link
          // to={`login`}
          className="btn"
        >
          Iniciar Sesión
        </Link>
        <button className="underline hidden sm:block">Registrarse</button>
      </div>
    </div>
  );
};

export default Navbar;
