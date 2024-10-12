import Navbar from '../../components/layouts/Navbar';
import ProductList from './components/ProductList';
import SummaryCart from './components/SummaryCart';

const Cart = () => {
  return (
    <>
      <div className="divider-y">
        <Navbar />
      </div>
      <div className='divider-x divider-y !grid sm:grid-cols-[1fr_350px] gap-4'>
        <ProductList />
        <SummaryCart />
      </div>
    </>
  );
};

export default Cart;
