const ProductCartAmout = () => {
  return (
    <div className="flex gap-4 p-3 rounded-md bg-white">
      <p>
        Subtotal <b>$1000.00</b>
      </p>
      <div className="">
        <input
          type="number"
          defaultValue="1"
          className="max-w-12 bg-gray-100 rounded-lg text-center"
        />
      </div>
      <span className="material-symbols-outlined">delete</span>
    </div>
  );
};

export default ProductCartAmout;
