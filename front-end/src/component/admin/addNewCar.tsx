import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useCarContext } from '../../context/CarContextDashbaord';
import Header from './header';

const AddNewCar: React.FC = () => {
  const { addCar } = useCarContext();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [startRent, setStartRent] = useState(new Date());
  const [finishRent, setFinishRent] = useState(new Date());
  const [picture, setPicture] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!picture) {
      alert('Please upload a picture');
      return;
    }

    const newCar = {
      name,
      price,
      start_rent: startRent,
      finish_rent: finishRent,
      picture: null,
    };

    try {
      await addCar(newCar, picture);
      alert('Car added successfully');
      setName('');
      setPrice('');
      setStartRent(new Date());
      setFinishRent(new Date());
      setPicture(null);
    } catch (error) {
      console.error('Error adding car:', error);
      alert('Failed to add car');
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
          <p>Add New Car</p>
        </div>
        <div style={{ marginLeft: "24px", marginTop: "27px" }}>
          <p className="title-dashboard">Add Data Car</p>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPicture(e.target.files ? e.target.files[0] : null)
                }
              />
            </div>
          </div>
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

export default AddNewCar;
