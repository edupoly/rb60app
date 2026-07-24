import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { updateUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
function GLoginBtn() {
  var [user, setUser] = useState(null);
  var dispatch = useDispatch();
  var navigate = useNavigate();
  function handleLoginSuccess(credentialResponse) {
    console.log("Login Success:", credentialResponse);
    setUser(credentialResponse);
    try {
      fetch("http://localhost:3500/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: credentialResponse.credential,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data::", data);
          localStorage.setItem("todo_token", data.token);
          setUser(data.user);
          dispatch(updateUser({ ...data }));
          navigate("/todolist");
          // email
          // picture
          // token
          // username
          console.log("Logged in successfully:", data);
        });

      // Save your app's custom JWT token to localStorage
    } catch (error) {
      console.error("Backend authentication failed:", error);
    }
  }
  return (
    <div className="mb-4 text-center">
      {!user && (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log("Login Failed")}
        />
      )}
    </div>
  );
}

export default GLoginBtn;
