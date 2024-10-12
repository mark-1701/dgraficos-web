import ImageNotFound from '/src/assets/image_not_found.jpg';

const Product = ({ imageUri, title, description, price }) => {
  return (
    <div className="flex flex-col justify-around items-center gap-2 p-4 sm:py-6">
      <div
        style={{ backgroundImage: `url(${ImageNotFound})` }}
        className="w-60 h-60 bg-cover"
      >
        <div className="hover:!opacity-100 opacity-0 flex justify-center items-center w-full h-full bg-zinc-700/[.3]">
          <button className='btn !bg-black'>Agregar al carrito</button>
        </div>
      </div>
      <p>undefined</p>
      <b>$1000.00</b>
      <p className="text-center">Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Product;
