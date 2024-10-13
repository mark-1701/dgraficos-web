import ProductCartAmout from './ProductCartAmout';
import ProductCartImages from './ProductCartImages';
import ProductCartSummary from './ProductCartSummary';

const ProductCart = ({ product }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-4 bg-gray-50">
      <div className="flex items-center gap-4">
        <ProductCartImages product={product} />
        <ProductCartSummary product={product} />
      </div>
      <ProductCartAmout product={product} />
    </div>
  );
};

export default ProductCart;
