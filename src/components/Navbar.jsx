import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, updateUser } from "../features/user/userSlice";
import { useEffect } from "react";
function Navbar() {
  var { user } = useSelector((state) => state.userR);
  console.log(user);
  var dispatch = useDispatch();
  var navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      dispatch(
        updateUser({
          username: window.localStorage.getItem("username"),
          token: window.localStorage.getItem("token"),
          email: window.localStorage.getItem("email"),
          picture: window.localStorage.getItem("picture"),
        }),
      );
    }
  }, []);
  console.log(user);
  return (
    <div className="d-flex justify-content-between align-items-center bg-success-subtle">
      <img
        src="https://png.pngtree.com/png-vector/20250408/ourmid/pngtree-global-education-logo-with-graduation-cap-and-book-png-image_15929049.png"
        alt=""
        style={{ width: "90px" }}
      />
      <ul className="d-flex list-unstyled w-50 justify-content-end align-items-center gap-4 px-5 m-0">
        {!user?.username && <Link to="/login">Login</Link>}
        {user?.username && (
          <>
            <Link to="/todolist">Todos</Link>
            <Link to="/counter">Counter</Link>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                navigate("/");
                dispatch(logout());
              }}
            >
              Logout
            </button>
            <img
              src={user?.picture}
              className="rounded"
              style={{ width: "50px" }}
            ></img>
          </>
        )}
      </ul>
    </div>
  );
}
export default Navbar;
