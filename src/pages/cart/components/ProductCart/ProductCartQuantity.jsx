import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  productUpdated,
  productRemoved
} from '../../../../redux/productsSlice';

const ProductCartQuantity = ({ product }) => {
  const dispatch = useDispatch();
  // si no cuenta con una cantidad, arranca con 0
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const onUpdateUser = () => {
    dispatch(productUpdated({ id: product.id, quantity }));
  };

  const onRemoveProduct = () => {
    dispatch(productRemoved(product.id));
  };

  useEffect(() => {
    onUpdateUser();
  }, [quantity]);

  return (
    <div className="flex gap-4 p-3 rounded-md bg-white">
      <p>
        Subtotal: <b>Q. {product?.inventaries[0]?.price * quantity}.00</b>
      </p>
      <div className="">
        <input
          type="number"
          defaultValue={quantity}
          min="1"
          className="max-w-12 bg-gray-100 rounded-lg text-center"
          onChange={e => {
            setQuantity(parseInt(e.target.value, 10));
          }}
        />
      </div>
      <span
        className="material-symbols-outlined cursor-pointer"
        onClick={onRemoveProduct}
      >
        delete
      </span>
    </div>
  );
};

export default ProductCartQuantity;
