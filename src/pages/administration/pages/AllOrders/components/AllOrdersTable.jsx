import ViewIcon from '../../../../../components/system/ViewIcon';
import RepairIcon from '../../../../../components/system/RepairIcon';
import DeleteIcon from '../../../../../components/system/DeleteIcon';
import capitalizeFirstLetter from '../../../../../utilities/capitalizeFirstLetter';

const AllOrdersTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  return (
    <table className="table columns-4">
      <thead>
        <tr>
          <th>id</th>
          <th>Estado</th>
          <th>Id de usuario</th>
          <th>Fecha de emisión</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(order => (
          <tr key={order?.id}>
            <td>{order?.id}</td>
            <td>{capitalizeFirstLetter(order?.order_status?.name)}</td>
            <td>{order?.user_id || <p>N/a</p>}</td>
            <td>{order?.created_at}</td>
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  // setSelectedElement(order);
                  // toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  // setSelectedElement(order);
                  // toggleUpdateModalState();
                }}
              >
                <RepairIcon />
              </button>
              <form
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
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllOrdersTable;
