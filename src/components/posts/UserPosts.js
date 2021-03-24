import React, { useState, useEffect } from "react";
import PostDetails from "./PostDetails";

const UserPosts = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const getPosts = (event) => {
    console.log(event.target.value);
    const userId = event.target.value;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?${userId}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          setLoading(true);
          setPosts(data);
          setLoading(false);
        },
        (error) => {
          setLoading(true);
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
              <select
                className="form-control"
                onChange={(event) => getPosts(event)}
              >
                <option> Select The User:</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            {posts.map((post) => (
              <PostDetails post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
