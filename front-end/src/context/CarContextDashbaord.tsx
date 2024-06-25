import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Car = {
  id: number;
  name: string;
  price: string;
  start_rent: Date;
  finish_rent: Date;
  picture: string | null;
  created_at: Date;
  updated_at: Date;
};

export type NewCar = Omit<Car, "id" | "created_at" | "updated_at">;
export type UpdateCar = Omit<Car, "id" | "created_at" | "updated_at">;

interface CarContextType {
  cars: Car[];
  fetchCars: () => Promise<void>;
  addCar: (car: NewCar, pictureFile: File) => Promise<void>;
  deleteCar: (carId: number) => Promise<void>;
  updateCar: (
    carId: number,
    car: UpdateCar,
    pictureFile: File | null
  ) => Promise<void>;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCarContext must be used within a CarContextProvider");
  }
  return context;
};

const CarDashboardContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cars");
      if (!response.ok) {
        throw new Error("Failed to fetch cars");
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const addCar = async (car: NewCar) => {
    const formData = new FormData();
    formData.append("name", car.name);
    formData.append("price", car.price);
    formData.append("start_rent", car.start_rent.toISOString());
    formData.append("finish_rent", car.finish_rent.toISOString());
    if (car.picture) {
      formData.append("picture", car.picture);
    }

    const token = localStorage.getItem("token");
    console.log(token);

    const response = await fetch("http://localhost:3000/api/cars", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const newCar = await response.json();
      setCars((prevCars) => [...prevCars, newCar]);
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add car");
    }
  };

  const deleteCar = async (carId: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token is missing");
      }

      const response = await fetch(`http://localhost:3000/api/cars/${carId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete car");
      }
      setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };
  const updateCar = async (
    carId: number,
    car: UpdateCar,
    pictureFile: File | null
  ) => {
    try {
      const formData = new FormData();
      formData.append("name", car.name);
      formData.append("price", car.price);
      formData.append("start_rent", car.start_rent.toISOString());
      formData.append("finish_rent", car.finish_rent.toISOString());
      if (pictureFile) {
        formData.append("picture", pictureFile);
      }

      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:3000/api/cars/${carId}`, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const updatedCar = await response.json();
        setCars((prevCars) =>
          prevCars.map((car) => (car.id === carId ? updatedCar : car))
        );
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update car");
      }
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  return (
    <CarContext.Provider
      value={{ cars, fetchCars, addCar, deleteCar, updateCar }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarDashboardContextProvider;
