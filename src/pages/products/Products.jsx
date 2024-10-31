import Navbar from '../../components/layouts/Navbar';
import AllProducts from './components/AllProducts';

const Products = () => {
  return (
    <>
      <div className="divider-y">
        <Navbar />
      </div>
      <AllProducts />
    </>
  );
};

export default Products;
