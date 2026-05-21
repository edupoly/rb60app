import React from "react";
import { Link } from "react-router-dom";
function Users() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers([...data.users]);
      });
  }, []);

  return (
    <div className="border m-2 p-2">
      <h1>Users</h1>
      <ul>
        {users?.map((user) => {
          return (
            <li>
              <Link to="/userDetails" state={user}>
                {user.firstName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
