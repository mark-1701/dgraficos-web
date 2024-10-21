import capitalizeFirstLetter from '../../../../utilities/capitalizeFirstLetter';
import formattedImageUri from '../../../../utilities/formattedImageUri';
import ImageWithContextMenu from './ImageWithContextMenu';
import ImageNotFound from '/src/assets/image_not_found.jpg';

const ProductCartImages = ({ product }) => {
  const imageUri = product?.image_uri
    ? formattedImageUri(product?.image_uri)
    : ImageNotFound;

  return (
    <div className="flex gap-4">
      <div>
        <p className="text-center">{capitalizeFirstLetter(product?.name)}</p>
        <img
          src={imageUri}
          alt="not found"
          className="w-20 h-20 object-cover"
        />
      </div>
      <div>
        <ImageWithContextMenu productId={product.id} />
      </div>
    </div>
  );
};

export default ProductCartImages;
