import ViewIcon from '../../../../../components/system/ViewIcon';
import DeleteIcon from '../../../../../components/system/DeleteIcon';
import capitalizeFirstLetter from '../../../../../utilities/capitalizeFirstLetter';
import dateFormatted from '../../../../../utilities/dateFormatted';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import CustomerOrderDetailsForm from './CustomerOrderDetailsForm';
import PanelButtons from './PanelButtons';
import TagOrderState from './TagOrderState';

const AllOrdersTable = ({
  data,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const [visible, setVisible] = useState(false);
  const [order, setOrder] = useState({});

  return (
    <table className="table columns-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Estado</th>
          <th>Nombre del cliente</th>
          <th>Teléfono del cliente</th>
          <th>Fecha de emisión</th>
          <th>Visualizar pedido</th>
        </tr>
      </thead>
      <tbody>
        {data.map(order => (
          <tr key={order?.id}>
            <td>{order?.id}</td>
            <td>
              <TagOrderState
                stateId={order?.order_status_id}
                stateName={capitalizeFirstLetter(order?.order_status?.name)}
              />
            </td>
            <td>{capitalizeFirstLetter(order?.guest_user?.first_name)}</td>
            <td>{capitalizeFirstLetter(order?.guest_user?.phone_number)}</td>
            <td>{dateFormatted(order?.created_at)}</td>
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setVisible(true);
                  setOrder(order);
                }}
              >
                <ViewIcon />
              </button>

              {/* boton para eliminar */}
              {/* <form
                action="post"
                onSubmit={e => {
                  e.preventDefault();
                  if (confirm('Aún no es posible elimianr escalaciones')) {
                    // deleteTicket(order.id);
                  }
                }}
              >
                <button type="submit" className="">
                  <DeleteIcon />
                </button>
              </form> */}
            </td>
          </tr>
        ))}
      </tbody>

      <Dialog
        header="Resolver Pedido"
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <CustomerOrderDetailsForm order={order} />
        <hr className="mt-14 mb-14" />
        <PanelButtons order={order} />
      </Dialog>
    </table>
  );
};

export default AllOrdersTable;
