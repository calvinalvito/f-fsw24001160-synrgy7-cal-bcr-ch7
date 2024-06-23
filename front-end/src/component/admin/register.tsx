import React, { useState } from "react";
import imageLogin from "../../assets/images/login-image.png";
import { useAuth } from "../../context/AuthContext";

const Register: React.FC = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(email, username, password);
      setMessage("Registration Successful");
      window.location.href = "/login";
    } catch (error) {
      setMessage(error.message || "Registration failed");
      console.error("Error registering:", error);
    }
  };

  return (
    <>
      <section id="signin" className="signin position-relative">
        <div className="container-xl">
          <div className="d-flex flex-row">
            <div className="col-8 position-absolute start-0">
              <img
                src={imageLogin}
                alt="Image Car Login"
                className="img-fluid"
                style={{ width: "958px", height: "900px" }}
              />
            </div>
            <div
              className="col-4 position-absolute end-0 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "white", height: "900px" }}
            >
              <div className="d-flex flex-column">
                <div
                  className="d-flex flex-row"
                  style={{ marginBottom: "32px" }}
                >
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
                <div className="info__message">{message && <p>{message}</p>}</div>
                <h1 className="heading2-font">Welcome, Admin BCR</h1>
                <form className="form__signin" onSubmit={handleSubmit}>
                  <div className="signIn__username mb-3">
                    <label
                      htmlFor="username"
                      className="form-label paragraph-font"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      placeholder="johndoe"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="signIn__email mb-3">
                    <label
                      htmlFor="email"
                      className="form-label paragraph-font"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      placeholder="johndee@gmail.com"
                      aria-describedby="emailHelp"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="signIn__password mb-3">
                    <label
                      htmlFor="password"
                      className="form-label paragraph-font"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="6+ characters"
                    />
                  </div>
                  <button type="submit" className="button-login login__submit">
                    Sign Up
                  </button>
                  <div className="text-center mt-4">
                    <p>
                      Sudah Punya Akun ? <a href="/login">Login</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
