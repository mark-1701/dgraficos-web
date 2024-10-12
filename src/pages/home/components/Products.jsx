import { Link } from 'react-router-dom';
import Product from '../../../components/common/Product';

const Products = () => {
  return (
    <div className="section px-4 sm:px-8">
      <h1 className="title">Productos</h1>
      <div className="!grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="text-right mt-4">
        <Link className="link">Ver más productos...</Link>
      </div>
    </div>
  );
};

export default Products;
