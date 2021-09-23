import { useState } from "react";
import BlogList from "./BlogList";

// We can now use the BlogList of line 18 anywhere in our application. 


const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...',author: 'mario', id:1},
    {title: 'Welcome party', body: 'lorem ipsum...',author: 'yoshi', id:2},
    {title: 'Web dev top tips', body: 'lorem ipsum...',author: 'mario', id:3}

  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Titles!"/>
    </div>
  );
}
 
export default Home;