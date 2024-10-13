import { useState } from 'react';
import Navbar from '../../components/layouts/Navbar';
import ProductList from './components/ProductList';
import SummaryCart from './components/SummaryCart';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';

const Cart = () => {
  const [step, setStep] = useState(1); // Estado para controlar el paso

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <div className="divider-y">
        <Navbar />
      </div>
      <div className="divider-x divider-y !grid sm:grid-cols-[1fr_350px] gap-8">
        {step === 1 ? <ProductList /> : <CustomerDetails />}
        <SummaryCart step={step} handleBack={handleBack} handleNext={handleNext} />
      </div>
      {/* <div className="flex justify-between mt-4">
        {step > 1 && (
          <button className="btn !bg-gray-500" onClick={handleBack}>
            Retroceder
          </button>
        )}
        <button className="btn !bg-zinc-900" onClick={handleNext}>
          {step === 2 ? 'Comprar' : 'Siguiente'}
        </button>
      </div> */}
    </>
  );
};

export default Cart;
