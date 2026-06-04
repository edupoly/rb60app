import { useState } from "react";
import { useLoginMutation } from "../../services/auth";
import { useDispatch } from "react-redux";
import { updateUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  var dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  var [loginFn] = useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    loginFn(formData).then((res) => {
      dispatch(
        updateUser({ username: res.data.username, token: res.data.token }),
      );
    });

    // fetch("http://localhost:3500/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.msg === "success") {
    //       window.localStorage.setItem("token", data.token);
    //     }
    //   });
    // Add your login API call here
  };

  return (
    <div className="container">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <b className="d-block text-center fs-3 mb-4">Login</b>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
