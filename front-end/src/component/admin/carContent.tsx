import React, { useEffect } from "react";
import { useCarContext } from "../../context/CarContextDashbaord";
import CarCardDashboard from "./carCardDashboard";
import Header from "./header";

interface CarContentProps {
  onAddNewCarClick: () => void;
  onEditCarClick: (carId: number) => void;
}

const CarContent: React.FC<CarContentProps> = ({
  onAddNewCarClick,
  onEditCarClick,
}) => {
  const { cars, fetchCars } = useCarContext();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <>
      <div className="d-flex flex-column">
        <Header/>

        <div className="d-flex flex-row" style={{ marginLeft: "24px" }}>
          <p className="" style={{ paddingRight: "4px" }}>
            Cars
          </p>
          <div style={{ paddingRight: "4px" }}>
            <div className="icon-placeholder" />
          </div>
          <p>List Cars</p>
        </div>
        <div
          className="d-flex flex-row"
          style={{ marginLeft: "25px", marginTop: "27px" }}
        >
          <p className="title-dashboard">List Cars</p>
          <button
            type="submit"
            className="btn btn-primary position-absolute end-0 d-flex flex-row justify-content-center gap-2"
            style={{ marginRight: "24px" }}
            onClick={onAddNewCarClick}
          >
            <div className="icon-placeholder" />
            Add New Car
          </button>
        </div>
        <section
          id="carCard"
          className="carCard"
          style={{ marginTop: "40px", marginLeft: "25px" }}
        >
          <div>
            <div className="cars-container">
              <div
                className="row row-cols-2 row-cols-lg-3 g-2 g-lg-2"
                id="cars-container"
              >
                {cars.map((car) => (
                  <CarCardDashboard
                    key={car.id}
                    car={car}
                    onEditCarClick={onEditCarClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarContent;
