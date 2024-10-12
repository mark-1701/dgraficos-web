import Navbar from '../../components/layouts/Navbar';
import BackgroundImage from '../../assets/imprenta.jpg';
import Footer from '../../components/layouts/Footer';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <>
      <Navbar />
      <main
          style={{ backgroundImage: `url(${BackgroundImage})` }}
          className="flex justify-center items-center h-screen bg-cover bg-center"
        >
          <div className="w-4/5 p-6 rounded bg-white sm:w-96">
            <h1 className="title text-center">Iniciar Sesión</h1>
            <LoginForm />
          </div>
        </main>
      <Footer />
    </>
  );
};

export default Login;
