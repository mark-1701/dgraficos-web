import { useEffect, useState } from 'react';
import { getData, showData } from '../../../../../services/api';
import capitalizeFirstLetter from '../../../../../utilities/capitalizeFirstLetter';
import formattedImageUri from '../../../../../utilities/formattedImageUri';

const OrderDetailsTable = ({ order }) => {
  const [orderDetailsData, setOrderDetailsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await showData('order-detail', order?.id);
      setOrderDetailsData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <table className="table columns-3">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre del producto</th>
            <th>Cantidad</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {orderDetailsData.map(orderDetail => (
            <tr key={orderDetail?.id}>
              <td>{orderDetail?.id}</td>
              <td>{capitalizeFirstLetter(orderDetail?.product?.name)}</td>
              <td>{orderDetail?.quantity}</td>
              <td>
                {orderDetail?.product_customization?.image_uri ? (
                  <a
                    href={formattedImageUri(
                      orderDetail?.product_customization?.image_uri
                    )}
                    target='_blank'
                    className='text-blue-600 underline'
                  >Ver</a>
                ) : (
                  'N/a'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailsTable;
