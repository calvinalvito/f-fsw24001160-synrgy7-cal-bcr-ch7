import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useCarContext, UpdateCar } from "../../context/CarContextDashbaord";
import Header from "./header";

interface EditCarProps {
  carId: number;
}

const EditCar: React.FC<EditCarProps> = ({ carId }) => {
  const { cars, updateCar } = useCarContext();

  const [car, setCar] = useState<UpdateCar>({
    name: "",
    price: "",
    picture: "",
    start_rent: new Date(),
    finish_rent: new Date(),
  });
  const [picture, setPicture] = useState<File | null>(null);

  useEffect(() => {
    const selectedCar = cars.find((c) => c.id === carId);
    if (selectedCar) {
      setCar({
        name: selectedCar.name,
        price: selectedCar.price,
        picture: selectedCar.picture,
        start_rent: new Date(selectedCar.start_rent),
        finish_rent: new Date(selectedCar.finish_rent),
      });
    }
  }, [cars, carId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await updateCar(carId, car, picture);
      alert("Car Updated Successfully");
    } catch (error) {
      console.error("Error Updating Car:", error);
      alert("Failed to update car");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handlePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPicture(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="d-flex flex-column col-9">
        <Header/>
        <div
          className="d-flex flex-row"
          style={{ marginLeft: "24px", marginTop: "32px" }}
        >
          <p className="" style={{ paddingRight: "4px" }}>
            Cars
          </p>
          <div style={{ paddingRight: "4px" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#222222"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p>List Cars</p>
          <div style={{ paddingRight: "4px" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#222222"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p>Edit Car</p>
        </div>
        <div style={{ marginLeft: "24px", marginTop: "27px" }}>
          <p className="title-dashboard">Edit Car</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-2"
          style={{ marginLeft: "24px", marginTop: "16px" }}
        >
          <div className="d-flex flex-row">
            <div style={{ width: "147px" }}>
              <label htmlFor="name" className="font-weight-bold">
                Name <span className="text-danger">*</span>
              </label>
            </div>
            <div className="input-group mb-3" style={{ width: "339px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                value={car.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div style={{ width: "147px" }}>
              <label htmlFor="price" className="font-weight-bold">
                Harga <span className="text-danger">*</span>
              </label>
            </div>
            <div className="input-group mb-3" style={{ width: "339px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Harga"
                aria-label="Harga"
                aria-describedby="basic-addon1"
                value={car.price}
                onChange={handleInputChange}
                name="price"
              />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div style={{ width: "147px" }}>
              <label htmlFor="picture" className="font-weight-bold">
                Foto <span className="text-danger">*</span>
              </label>
            </div>
            <div className="input-group mb-3" style={{ width: "339px" }}>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                onChange={handlePictureChange}
              />
            </div>
          </div>
          {car.picture && (
              <div className="d-flex flex-row mb-3">
                <div style={{ width: "147px" }}>
                  <label className="font-weight-bold">Current Picture</label>
                </div>
                <div>
                  <img
                    src={car.picture}
                    alt="Current Car"
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            )}
          <div className="d-flex flex-row">
            <div style={{ width: "147px" }}>
              <label htmlFor="start_rent" className="font-weight-bold">
                Start Rent <span className="text-danger">*</span>
              </label>
            </div>
            <div className="input-group mb-3" style={{ width: "339px" }}>
              -
            </div>
          </div>
          <div className="d-flex flex-row">
            <div style={{ width: "147px" }}>
              <label htmlFor="created_at" className="font-weight-bold">
                Create At <span className="text-danger">*</span>
              </label>
            </div>
            <div className="input-group mb-3" style={{ width: "339px" }}>
              -
            </div>
          </div>
          <div className="d-flex flex-row">
            <div style={{ width: "147px" }}>
              <label htmlFor="updated_at" className="font-weight-bold">
                Updated At <span className="text-danger">*</span>
              </label>
            </div>
            <div className="input-group mb-3" style={{ width: "339px" }}>
              -
            </div>
          </div>
          <div className="d-flex flex-row gap-4">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => window.location.reload()}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCar;
