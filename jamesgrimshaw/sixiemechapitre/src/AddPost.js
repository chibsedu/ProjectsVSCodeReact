import React, { useState } from "react";

const AddPost = (props) => {
  const [postTitle, setPostTitle] = useState("");

  function onAddPost(event) {
    event.preventDefault();
    const newPostsArr = [{ id: 999, title: postTitle }, ...props.posts];
    props.setPosts(newPostsArr);
  }

  return (
    <form onSubmit={onAddPost}>
      <input
        type="text"
        id="post_title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
