import React, { useState } from "react";
import CarContent from "./carContent";
import AddNewCar from "./addNewCar";
import EditCar from "./editCar";

const SidebarCars: React.FC = () => {
  const [showAddNewCar, setShowAddNewCar] = useState(false);
  const [showEditCar, setShowEditCar] = useState(false);
  const [editCarId, setEditCarId] = useState<number | null>(null);

  const handleAddNewCarClick = () => {
    setShowAddNewCar(true);
    setShowEditCar(false);
    setEditCarId(null);
  };

  const handleEditCarClick = (carId: number) => {
    setShowEditCar(true);
    setShowAddNewCar(false);
    setEditCarId(carId);
    console.log(carId);
  };

  return (
    <>
      <div className="sidebar__cars col-2">
        <div className="sidebar__header d-flex align-items-center">
          <svg
            width="100"
            height="34"
            viewBox="0 0 100 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="34" fill="#CFD4ED" />
          </svg>
        </div>
        <div className="sidebar__content d-flex flex-column">
          <p className="paragraph-font">CARS</p>
          <button
            type="button"
            className="btn sidebar__button"
            onClick={() => {
              setShowAddNewCar(false);
              setShowEditCar(false);
              setEditCarId(null);
            }}
          >
            List Cars
          </button>
        </div>
      </div>
      <div className="col-9">
        {showAddNewCar ? (
          <AddNewCar />
        ) : showEditCar && editCarId !== null ? (
          <EditCar carId={editCarId} /> // Ensure carId is passed when showEditCar is true
        ) : (
          <CarContent
            onAddNewCarClick={handleAddNewCarClick}
            onEditCarClick={handleEditCarClick}
          />
        )}
      </div>
    </>
  );
};

export default SidebarCars;
