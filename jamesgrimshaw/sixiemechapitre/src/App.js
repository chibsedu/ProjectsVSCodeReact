import "./App.css";
import Header from "./Header";
import AddPost from "./AddPost";
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

  return (
    <div className="App">
      <header className="App-header">
        <Header title={name} />
        <button onClick={() => changeName("Hfufu")}>Change Name</button>

        <AddPost posts={posts} setPosts={setPosts} />
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
