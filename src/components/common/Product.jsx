import useMedia from 'use-media';
import capitalizeFirstLetter from '../../utilities/capitalizeFirstLetter';
import formattedImageUri from '../../utilities/formattedImageUri';
import ImageNotFound from '/src/assets/image_not_found.jpg';

const Product = ({ product, confirm }) => {
  // detectar si la pantalla tiene al menos 640px
  const isMediumScreen = useMedia({minWidth: '640px'});
  

  const imageUri = product?.image_uri
    ? formattedImageUri(product?.image_uri)
    : ImageNotFound;

  return (
    <div className="flex flex-col justify-around items-center gap-2 p-4 sm:py-6">
      <div
        style={{
          backgroundImage: `url(${imageUri})`
        }}
        className="w-40 h-40 bg-cover sm:w-60 sm:h-60"
      >
        <div className="hover:!opacity-100 opacity-0 flex justify-center items-center w-full h-full bg-zinc-700/[.3]">
          <button
            className="btn !bg-black"
            onClick={e => {
              confirm(product);
            }}
          >
            {/* agregar al carrito si es una pantalla mayor de 640px */}
            {isMediumScreen ? 'Agregar al carrito' : 'Agregar'}
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
