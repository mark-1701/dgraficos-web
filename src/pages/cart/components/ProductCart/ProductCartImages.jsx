import ImageNotFound from '/src/assets/image_not_found.jpg';

const ProductCartImages = () => {
  return (
    <div className="flex gap-4">
      <div>
        <p className="text-center">Producto</p>
        <img
          src={ImageNotFound}
          alt="not found"
          className="w-20 h-20 object-cover"
        />
      </div>
      <div>
        <p className="text-center">Diseño</p>
        <img
          src={ImageNotFound}
          alt="not found"
          className="w-20 h-20 object-cover"
        />
      </div>
    </div>
  );
};

export default ProductCartImages;
