import { useRef, useState } from 'react';
import Navbar from '../../components/layouts/Navbar';
import ProductList from './components/ProductList';
import SummaryCart from './components/SummaryCart';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productsCleared } from '../../redux/productsSlice';
import { postData } from '../../services/api';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  const [step, setStep] = useState(1); // Estado para controlar el paso

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const accept = () => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append('order_status_id', 1);
        await postData('order', formData);

        // mensaje de confirmacion
        toast.current.show({
          severity: 'success',
          summary: 'Confirmación',
          detail: 'Tu orden a sido enviada',
          life: 3000
        });
        // reinicio
        dispatch(productsCleared());
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } catch (err) {
        toast.current.show({
          severity: 'error',
          summary: 'Error Message',
          detail: 'Error en la consulta',
          life: 3000
        });
      }
    };
    fetchData();
  };

  // mensaje de rechazo
  const reject = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'Cancelación',
      detail: 'Operación cancelada',
      life: 3000
    });
  };

  // acccion para adelante
  const handleNext = () => {
    if (step == 2) {
      confirmDialog({
        message: '¿Listo para comprar?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        defaultFocus: 'accept',
        accept,
        reject
      });
    }
    if (step < 2) {
      setStep(step + 1);
    }
  };

  // accion para atras
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="divider-y">
        <Navbar />
      </div>
      <form className="divider-x divider-y !grid sm:grid-cols-[1fr_350px] gap-8">
        {step === 1 ? <ProductList /> : <CustomerDetails />}
        <SummaryCart
          step={step}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      </form>
    </>
  );
};

export default Cart;
