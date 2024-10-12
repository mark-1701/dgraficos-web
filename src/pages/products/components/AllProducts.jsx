import { Link } from 'react-router-dom';
import Product from '../../../components/common/Product';

const AllProducts = () => {
  return (
    <div className="divider-x divider-y">
      <h1 className="title">Productos</h1>
      <div className="!grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default AllProducts;
