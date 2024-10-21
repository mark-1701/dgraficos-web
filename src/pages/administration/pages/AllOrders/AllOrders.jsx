import { useState } from 'react';
import AllOrdersTable from './components/AllOrdersTable';
import { useEffect } from 'react';
import { getData } from '../../../../services/api';

const AllOrders = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('order');
      setOrderData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="title">Todos los pedidos</h1>
      <AllOrdersTable data={orderData} />
    </>
  );
};

export default AllOrders;
