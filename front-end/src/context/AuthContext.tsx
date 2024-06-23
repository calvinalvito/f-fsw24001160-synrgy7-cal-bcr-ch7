import React, { createContext, useContext, useState, useEffect } from "react";

export type UserData = {
  id: number;
  username: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
  getAllUsers: () => Promise<UserData[]>;
  checkAuthenticated: () => Promise<UserData | null>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkAuthenticated();
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        const userData = await checkAuthenticated(); // Setelah login berhasil, periksa autentikasi ulang dan dapatkan data pengguna

        // Navigasi berdasarkan role setelah mendapatkan data pengguna
        if (userData?.role === "superadmin" || userData?.role === "admin") {
          window.location.replace("/admin/dashboard");
        } else if (userData?.role === "member") {
          window.location.replace("/");
        } else {
          window.location.replace("/"); // Default navigasi jika role tidak dikenali
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      throw new Error("Login failed");
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        await checkAuthenticated(); // Setelah registrasi berhasil, periksa autentikasi ulang dan dapatkan data pengguna
        setIsAuthenticated(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error registering:", error);
      throw new Error("Registration failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    window.location.replace("/login"); // Navigasi ke halaman login setelah logout berhasil
  };

  const checkAuthenticated = async (): Promise<UserData | null> => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch("http://localhost:3000/api/v1/whoami", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData); // Set user data yang diterima dari server
        setIsAuthenticated(true);
        return userData; // Mengembalikan data pengguna
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser(null);
      throw error; // Melempar error agar dapat ditangani di tempat lain
    }
  };

  const getAllUsers = async (): Promise<UserData[]> => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch("http://localhost:3000/api/v1/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const usersData = await response.json();
        return usersData; // Mengembalikan data pengguna
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    user,
    login,
    register,
    logout,
    checkAuthenticated,
    getAllUsers, // Tambahkan getAllUsers ke authContextValue
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
