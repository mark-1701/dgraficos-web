const CustomerOrderDetailsForm = ({ order }) => {
  return (
    <div className="!grid grid-cols-2 gap-14 grid-flow-row">
      <div>
        <label htmlFor="id" className="label">
          Id:
        </label>
        <input
          type="text"
          id="id"
          name="id"
          disabled
          className="input"
          value={order?.guest_user?.id}
        />
      </div>
      <div>
        <label htmlFor="first_name" className="label">
          Nombres:
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          disabled
          className="input"
          value={order?.guest_user?.first_name}
        />
      </div>
      <div>
        <label htmlFor="last_name" className="label">
          Apellidos:
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          disabled
          className="input"
          value={order?.guest_user?.last_name}
        />
      </div>
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          disabled
          className="input"
          value={order?.guest_user?.email}
        />
      </div>
      <div>
        <label htmlFor="phone_number" className="label">
          Número de télefono:
        </label>
        <input
          type="number"
          id="phone_number"
          name="phone_number"
          disabled
          className="input"
          value={order?.guest_user?.phone_number}
        />
      </div>
      <div>
        <label htmlFor="secondary_phone_number" className="label">
          Número de télefono secundario:
        </label>
        <input
          type="number"
          id="secondary_phone_number"
          name="secondary_phone_number"
          disabled
          className="input"
          value={order?.guest_user?.secondary_phone_number}
        />
      </div>
      <div>
        <label htmlFor="date_of_birth" className="label">
          Fecha de nacimiento:
        </label>
        <input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          disabled
          className="input"
          value={order?.guest_user?.date_of_birth}
        />
      </div>
    </div>
  );
};

export default CustomerOrderDetailsForm;
