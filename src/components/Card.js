import React from "react";
import "./Blogs.css";

function BlogCard({ title, description, image }) {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
