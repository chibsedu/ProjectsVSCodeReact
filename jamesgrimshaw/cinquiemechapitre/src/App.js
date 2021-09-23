import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Guest");
  const [posts, setPosts] = useState([]);

  // useEffect Hooks:
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  function changeName(firstName) {
    setName(firstName);
  }

  function onAddPost() {
    const newPostsArr = [{ id: 999, title: "My New Post" }, ...posts];
    setPosts(newPostsArr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header title={name} />
        <button onClick={() => changeName("Hfufu")}>Change Name</button>
        <button onClick={onAddPost}>Add New Post</button>
      </header>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
