
// Finally we can destructure our props of line 6 like this:
// (props) --devient--> ({blogs, title}).
// On peut ainsi se passer des line 8 et 9

const BlogList = (props) => {

    const blogs = props.blogs;
    const title = props.title;
    // console.log(props, blogs);

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
        {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
        </div>
    );
}

export default BlogList;
