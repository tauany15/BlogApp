import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./App.css";

const App = () => (
  <div className="App">
    <main>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/new" element={<PostForm />} />
      </Routes>
    </main>
  </div>
);

export default App;
