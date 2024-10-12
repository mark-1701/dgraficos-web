const SummaryCart = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h1 className="title mb-6">Resumen</h1>
      <table className="w-full mb-6 table-auto border-collapse">
        <tbody>
          <tr>
            <td className="p-2 border-b text-left font-semibold">Subtotal</td>
            <td className="p-2 border-b text-right">Q. 100.00</td>
          </tr>
          <tr>
            <td className="p-2 border-b text-left font-semibold">Total</td>
            <td className="p-2 border-b text-right">Q. 100.00</td>
          </tr>
        </tbody>
      </table>
      <button className="btn !w-full !bg-zinc-900">Siguiente</button>
    </div>
  );
};

export default SummaryCart;
