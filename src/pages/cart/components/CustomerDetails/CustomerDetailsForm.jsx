const CustomerDetailsForm = () => {
  return (
    <div
      className="!grid grid-cols-2 gap-14  p-4 rounded-lg bg-gray-50 border"
      onSubmit={e => {
        e.preventDefault();
        // loginAction(e);
      }}
    >
      <div>
        <label htmlFor="name" className="label">
          Nombre:
        </label>
        <input type="text" id="name" name="name" required className="input" />
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
