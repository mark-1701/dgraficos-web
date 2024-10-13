const ProductCartSummary = ({ product }) => {
  return (
    <div>
      <p>{product?.description}</p>
      <b>Q. {product?.inventaries[0]?.price}.00</b>
    </div>
  );
};

export default ProductCartSummary;
