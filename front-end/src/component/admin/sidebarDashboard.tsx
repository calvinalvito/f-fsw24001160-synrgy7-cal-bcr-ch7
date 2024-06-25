import React, { useEffect, useState } from "react";
import Header from "./header";
import { useCarContext } from "../../context/CarContextDashbaord";
import { useAuth, UserData } from "../../context/AuthContext";

const SidebarDashboard: React.FC = () => {
  const { cars } = useCarContext();
  const { user, getAllUsers } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    if (user?.role === "superadmin") {
      fetchUsers();
    } else {
      setLoading(false);
    }
  }, [getAllUsers, user]);

  return (
    <>
      <div className="sidebar__dashboard col-2">
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
          <p className="paragraph-font">DASHBOARD</p>
          <button type="button" className="btn sidebar__button">
            Dashboard
          </button>
        </div>
      </div>
      <div className="col-9">
        <Header />

        <div className="d-flex flex-row" style={{ marginLeft: "24px", marginTop: "32px" }}>
          <p className="" style={{ paddingRight: "4px" }}>Dashboard</p>
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Dashboard</p>
        </div>

        <div className="title-dashboard" style={{ marginLeft: "24px" }}>
          <h3>Dashboard</h3>
        </div>

        <div className="d-flex flex-row" style={{ marginLeft: "24px", marginTop: "24px" }}>
          <svg
            width="4"
            height="24"
            viewBox="0 0 4 24"
            fill="#0D28A6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="4" height="24" fill="#0D28A6" />
          </svg>
          <p style={{ paddingLeft: "8px" }}>List Car</p>
        </div>

        {loading ? (
          <div style={{ marginLeft: "24px", marginTop: "24px" }}>Loading...</div>
        ) : error ? (
          <div style={{ marginLeft: "24px", marginTop: "24px" }}>{error}</div>
        ) : (
          <table className="table" style={{ width: "950px", marginLeft: "44px", marginTop: "24px" }}>
            <thead>
              <tr>
                <th scope="col" className="table-secondary">No</th>
                <th scope="col" className="table-secondary">Name</th>
                <th scope="col" className="table-secondary">Price</th>
                <th scope="col" className="table-secondary">Start Rent</th>
                <th scope="col" className="table-secondary">Finish Rent</th>
                <th scope="col" className="table-secondary">Picture</th>
                <th scope="col" className="table-secondary">Created At</th>
                <th scope="col" className="table-secondary">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {cars.length > 0 ? (
                cars.map((car, index) => (
                  <tr key={car.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{car.name}</td>
                    <td>{car.price}</td>
                    <td>{new Date(car.start_rent).toLocaleDateString()}</td>
                    <td>{new Date(car.finish_rent).toLocaleDateString()}</td>
                    <td>
                      {car.picture ? (
                        <img
                          src={car.picture}
                          alt={car.name}
                          style={{ width: "100px", height: "auto" }}
                        />
                      ) : (
                        "No picture"
                      )}
                    </td>
                    <td>{new Date(car.created_at).toLocaleDateString()}</td>
                    <td>{new Date(car.updated_at).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center" }}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <div className="d-flex flex-row" style={{ marginLeft: "24px", marginTop: "24px" }}>
          <svg
            width="4"
            height="24"
            viewBox="0 0 4 24"
            fill="#0D28A6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="4" height="24" fill="#0D28A6" />
          </svg>
          <p style={{ paddingLeft: "8px" }}>List User</p>
        </div>

        {loading ? (
          <div style={{ marginLeft: "24px", marginTop: "24px" }}>Loading...</div>
        ) : error ? (
          <div style={{ marginLeft: "24px", marginTop: "24px" }}>{error}</div>
        ) : user?.role === "superadmin" ? (
          <table className="table" style={{ width: "950px", marginLeft: "44px", marginTop: "24px" }}>
            <thead>
              <tr>
                <th scope="col" className="table-secondary">No</th>
                <th scope="col" className="table-secondary">Username</th>
                <th scope="col" className="table-secondary">Email</th>
                <th scope="col" className="table-secondary">Role</th>
                <th scope="col" className="table-secondary">Created At</th>
                <th scope="col" className="table-secondary">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{new Date(user.created_at).toLocaleDateString()}</td>
                    <td>{new Date(user.updated_at).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center" }}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            Hanya boleh diakses superadmin
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarDashboard;
