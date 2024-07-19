import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/posts/${id}`)
      .then(() => {
        alert("Post Deleted Successfully!");
        setPosts(posts.filter((post) => post.id !== id));
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error deleting the post", error);
      });
  };

  return (
    <div className="post-list-container container">
      <h1>Posts List</h1>
      <nav>
        <button type="button" onClick={() => navigate("/new")}>
          New Post
        </button>
      </nav>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <div className="post-item-header">
              <h3>{post.title}</h3>
              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            </div>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
