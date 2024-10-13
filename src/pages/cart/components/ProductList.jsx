import { useSelector } from 'react-redux';
import ProductCart from './ProductCart/ProductCart';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const products = useSelector(state => state.products.data);
  return (
    <div>
      <h1 className="title">Carrito</h1>
      {products.length > 0 ? (
        products.map(product => (
          <ProductCart key={product.id} product={product} />
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductList;
