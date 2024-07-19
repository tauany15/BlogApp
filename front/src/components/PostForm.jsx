import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const postData = { title, content };
    axios
      .post(`http://localhost:8000/api/posts/`, postData)
      .then(() => {
        alert("Post created!");
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error posting your post!", error);
      });
  };

  return (
    <div className="post-form-container">
      <h1>Create your post</h1>
      <nav>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </nav>
      <form>
        <div className="form-group">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        </div>
        <div className="form-group">
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Type the content of your post here..."></textarea>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
