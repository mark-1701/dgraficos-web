import ImageNotFound from '/src/assets/image_not_found.jpg';

const Product = ({ product, confirm }) => {
  // darle formato mayusculas en la primera letra
  const capitalizeFirstLetter = str => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // darle formato a la url de la imagen
  const formattedImageUri = imageUri => {
    return `${import.meta.env.VITE_IMAGES_URL}/${imageUri}`;
  };

  const imageUri = product?.image_uri
    ? formattedImageUri(product?.image_uri)
    : ImageNotFound;

  return (
    <div className="flex flex-col justify-around items-center gap-2 p-4 sm:py-6">
      <div
        style={{
          backgroundImage: `url(${imageUri})`
        }}
        className="w-60 h-60 bg-cover"
      >
        <div className="hover:!opacity-100 opacity-0 flex justify-center items-center w-full h-full bg-zinc-700/[.3]">
          <button
            className="btn !bg-black"
            onClick={e => {
              confirm(product);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <p>{capitalizeFirstLetter(product?.name)}</p>
      <b>Q. {product?.inventaries[0]?.price}.00</b>
      <p className="text-center">{product?.description}</p>
    </div>
  );
};

export default Product;
