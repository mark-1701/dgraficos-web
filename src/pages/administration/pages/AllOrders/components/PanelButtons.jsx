import CustomButton from '../../../../../components/system/CustomButton';
import { updateData } from '../../../../../services/api';

const PanelButtons = ({ order }) => {
  const handleOrderStateSubmit = orderStatusId => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append('id', order?.id);
        formData.append('order_status_id', orderStatusId);
        formData.append('_method', 'put');
        const response = await updateData('order', order?.id, formData);
        console.log(response);
        window.location.reload();
      } catch (err) {}
    };
    fetchData();
  };

  return (
    <div className="flex justify-evenly">
      <button
        className="cursor-pointer"
        onClick={() => {
          handleOrderStateSubmit(1);
        }}
      >
        <CustomButton
          icon={'warning'}
          title={'Nuevo'}
          background={'bg-yellow-500'}
        />
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleOrderStateSubmit(2);
        }}
      >
        <CustomButton
          icon={'precision_manufacturing'}
          title={'En Proceso'}
          background={'bg-blue-500'}
        />
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleOrderStateSubmit(3);
        }}
      >
        <CustomButton
          icon={'error'}
          title={'Cancelado'}
          background={'bg-red-500'}
        />
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleOrderStateSubmit(4);
        }}
      >
        <CustomButton
          icon={'check_circle'}
          title={'Finalizado'}
          background={'bg-green-500'}
        />
      </button>
    </div>
  );
};

export default PanelButtons;
