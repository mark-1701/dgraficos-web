const CustomerDetailsForm = () => {
  return (
    <div className="!grid grid-cols-2 gap-14  grid-flow-row  p-4 rounded-lg bg-gray-50 border">
      <div>
        <label htmlFor="first_name" className="label">
          Nombres:
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          required
          className="input"
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
          required
          className="input"
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
          required
          className="input"
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
          required
          className="input"
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
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="address" className="label">
          Dirección:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          className="input"
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
          required
          className="input"
        />
      </div>
    </div>
  );
};

export default CustomerDetailsForm;
