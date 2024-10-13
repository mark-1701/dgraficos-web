import ImageNotFound from '/src/assets/image_not_found.jpg';

const ProductCartImages = ({ product }) => {
  // darle formato a la url de la imagen
  const formattedImageUri = imageUri => {
    return `${import.meta.env.VITE_IMAGES_URL}/${imageUri}`;
  };

  const imageUri = product?.image_uri
    ? formattedImageUri(product?.image_uri)
    : ImageNotFound;

  return (
    <div className="flex gap-4">
      <div>
        <p className="text-center">Producto</p>
        <img
          src={imageUri}
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
