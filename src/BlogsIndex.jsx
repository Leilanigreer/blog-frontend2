export function BlogsIndex ({blogs}) {
  return (
    <div>
      <p>All Blogs </p>
      {blogs.map((blog) => (
       <div key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <img src={blog.image} />
        </div> 
      ))}
    </div>
    );
  }