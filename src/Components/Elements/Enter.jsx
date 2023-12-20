import React, { useState } from "react";

const Enter = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    licensePlate: "",
    vehicleType: "motor",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir, seperti mengirimnya ke server atau menyimpan di state aplikasi
    console.log(formData);
    // Setelah berhasil, tutup modal
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-[#1E227F]"
        >
          Nomor Kartu
        </label>
        <input
          type="number"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="mt-1 p-2 border-2 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="licensePlate"
          className="block text-sm font-medium text-[#1E227F]"
        >
          Plat Nomor
        </label>
        <input
          type="text"
          id="licensePlate"
          name="licensePlate"
          value={formData.licensePlate}
          onChange={handleChange}
          className="mt-1 p-2 border-2 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="vehicleType"
          className="block text-sm font-medium text-[#1E227F]"
        >
          Tipe Kendaraan
        </label>
        <select
          id="vehicleType"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          className="mt-1 p-2 border-2 rounded-md w-full"
        >
          <option value="motor">Motor</option>
          <option value="mobil">Mobil</option>
        </select>
      </div>
    </form>
  );
};

export default Enter;
