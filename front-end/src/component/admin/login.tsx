import React, { useState } from "react";
import imageLogin from "../../assets/images/login-image.png";
import { useAuth } from "../../context/AuthContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      await login(email, password);
      setMessage("Login Successful");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message || "Login failed");
        console.error("Error logging in:", error);
      } else {
        setMessage("Login failed");
        console.error("Unknown error occurred:", error);
      }
    } finally {
      setIsLoading(false);
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
                  <button
                    type="submit"
                    className="button-login login__submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Sign In"}
                  </button>
                  <div className="text-center mt-4">
                    <p>
                      Belum Punya Akun ? <a href="/register">Register</a>
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

export default Login;
