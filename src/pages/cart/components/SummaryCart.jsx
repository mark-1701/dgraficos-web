import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SummaryCart = ({ step, handleBack, handleNext }) => {
  const [subtotal, setSubtotal] = useState(0);
  const products = useSelector(state => state.products.data);

  useEffect(() => {
    const subtotal = products.reduce((total, product) => {
      const productAmount = product?.amount || 0;
      const productPrice = product?.inventaries[0]?.price || 0;
      return total + productAmount * productPrice;
    }, 0); // El 0 es el valor inicial del acumulador

    setSubtotal(subtotal);
  }, [products]);

  return (
    <div className="max-h-fit bg-gray-50 p-4 rounded-lg border">
      <h1 className="title mb-6">Resumen</h1>
      <table className="w-full mb-6 table-auto border-collapse">
        <tbody>
          <tr>
            <td className="p-2 border-b text-left font-semibold">Subtotal</td>
            <td className="p-2 border-b text-right">Q. {subtotal}.00</td>
          </tr>
          <tr>
            <td className="p-2 border-b text-left font-semibold">Total</td>
            <td className="p-2 border-b text-right">Q. {subtotal}.00</td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-2">
        {step > 1 && (
          // ? aqui el boton si tiene la capacidad de retroceder
          <button className="btn w-full !bg-gray-400" onClick={handleBack}>
            Retroceder
          </button>
        )}
        <button
          type="submit"
          className="btn w-full !bg-zinc-900 cursor-pointer"
          // ? el boton ya no gestiona el siguiente paso, ahora es el formulario
          // onClick={handleNext}
        >
          {step === 2 ? 'Comprar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
};

export default SummaryCart;
