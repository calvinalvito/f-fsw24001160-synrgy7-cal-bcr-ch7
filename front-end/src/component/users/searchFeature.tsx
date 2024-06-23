import React, { useState, useEffect, useContext } from "react";
import CarCard from "./carCard";
import { CarContext, Car } from "../../context/CarContext";

const SearchFeature: React.FC = () => {
  const { cars } = useContext(CarContext);
  const [driverType, setDriverType] = useState<string>("");
  const [carDate, setCarDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("");
  const [passengerCount, setPassengerCount] = useState<string>("");
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  const handleSearch = () => {
    const selectedDate = new Date(carDate);
    const selectedHour = parseInt(pickupTime.split('.')[0]);
    const selectedPassengerCount = passengerCount === "" ? 0 : parseInt(passengerCount);

    const filtered = cars.filter((car) => {
      const availableAt = new Date(car.availableAt);
      
      return (
        (driverType === "" || car.typeDriver === driverType) &&
        car.available &&
        availableAt.getHours() >= selectedHour &&
        availableAt.getFullYear() >= selectedDate.getFullYear() &&
        availableAt.getMonth() >= selectedDate.getMonth() &&
        availableAt.getDate() >= selectedDate.getDate() &&
        (passengerCount === "" || car.capacity >= selectedPassengerCount)
      );
    });

    setFilteredCars(filtered);
  };

  const checkInputs = () => {
    const isDriverTypeSelected = driverType !== "";
    const isDateSelected = carDate !== "";
    const isPickupTimeSelected = pickupTime !== "";
    const isPassengerCountValid =
      passengerCount === "" || parseInt(passengerCount) >= 0;

    return (
      isDriverTypeSelected &&
      isDateSelected &&
      isPickupTimeSelected &&
      isPassengerCountValid
    );
  };

  useEffect(() => {
    const searchButton = document.getElementById("searchCar") as HTMLButtonElement | null;
    if (searchButton) {
      searchButton.disabled = !checkInputs();
    }
  }, [driverType, carDate, pickupTime, passengerCount]);

  return (
    <>
      <section
        id="search"
        className="search position-absolute start-50 translate-middle"
      >
        <div className="container-xl d-flex justify-content-center">
          <div className="search__content shadow" style={{ width: "1047px" }}>
            <div
              className="d-flex flex-row justify-content-between"
              style={{ padding: "24px" }}
            >
              <div className="d-flex flex-column" style={{ width: "210px" }}>
                <div>
                  <p className="paragraph-font">Tipe Driver</p>
                </div>
                <div>
                  <div className="input-group">
                    <select
                      className="form-select"
                      id="driverType"
                      value={driverType}
                      onChange={(e) => setDriverType(e.target.value)}
                    >
                      <option value="">Pilih Tipe Driver</option>
                      <option value="dengan-sopir">Dengan Sopir</option>
                      <option value="tanpa-sopir">
                        Tanpa Driver (Lepas Kunci)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column" style={{ width: "210px" }}>
                <div>
                  <p className="paragraph-font">Tanggal</p>
                </div>
                <div>
                  <input
                    type="date"
                    className="form-control"
                    id="carDate"
                    value={carDate}
                    onChange={(e) => setCarDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex flex-column" style={{ width: "210px" }}>
                <div>
                  <p className="paragraph-font">Waktu Jemput</p>
                </div>
                <div>
                  <select
                    className="form-select"
                    id="pickupTime"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  >
                    <option value="">Pilih Waktu</option>
                    <option value="08.00">08.00 WIB</option>
                    <option value="09.00">09.00 WIB</option>
                    <option value="10.00">10.00 WIB</option>
                    <option value="11.00">11.00 WIB</option>
                    <option value="12.00">12.00 WIB</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column" style={{ width: "210px" }}>
                <div>
                  <p className="paragraph-font">
                    Jumlah Penumpang (optional)
                  </p>
                </div>
                <div>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    id="passengerCount"
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                  />
                </div>
              </div>
              <div className="align-content-end">
                <button
                  id="searchCar"
                  className="button navbar__button"
                  type="button"
                  onClick={handleSearch}
                  disabled={!checkInputs()}
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="carCard"
        className="carCard"
        style={{ marginTop: "40px" }}
      >
        <div className="container-xl">
          <div className="cars-container">
            <div
              className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3"
              id="cars-container"
            >
              {filteredCars.map((car) => (
                <div key={car.id} className="col">
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchFeature;
