import React, { useState, useEffect } from "react";

const UserPosts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          setUsers(data);
        },
        (error) => {
          alert("error");
        }
      );
  };
  return (
    <div>
      <div className="card">
        <div className=" card-header">Users Posts</div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <label>Name Of User:</label>
              <select className="form-control">
                <option> Select The User:</option>
                {users.map((user) => (
                  <option key={user.id}>{user.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
