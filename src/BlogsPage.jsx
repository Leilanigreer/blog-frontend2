import axios from "axios";
import { useState, useEffect } from "react";
import { BlogsIndex } from "./BlogsIndex";

export function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setBlogs(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      < BlogsIndex blogs={blogs} />
    </main>
  )
};