import React, { createContext, useEffect, useState } from "react";

export interface Car {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
  availableAt: string;
  typeDriver: string;
}

interface CarContextType {
  cars: Car[];
}

export const CarContext = createContext<CarContextType>({ cars: [] });

export const CarContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cars, setCars] = useState<Car[]>([]);

  async function load() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const carList: Car[] = data;

      const newCars = carList.map((car: Car) => {
        const listTypeDriver = ["dengan-sopir", "tanpa-sopir"];
        return {
          ...car,
          typeDriver:
            listTypeDriver[Math.floor(Math.random() * listTypeDriver.length)],
          availableAt: getRandomDate(), // Update availableAt to a new date
        };
      });

      setCars(newCars);
      localStorage.setItem("CARS", JSON.stringify(newCars));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const getRandomDate = () => {
    const randomMonth = getRandomInt(5, 11);
    const randomDay = getRandomInt(1, 30);
    const randomHour = getRandomInt(0, 23);
    const randomMinute = getRandomInt(0, 59);

    const randomDate = new Date(
      2024,
      randomMonth,
      randomDay,
      randomHour,
      randomMinute
    );
    return randomDate.toISOString(); // Convert to ISO string
  };

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    load();
  }, []);

  return <CarContext.Provider value={{ cars }}>{children}</CarContext.Provider>;
};
