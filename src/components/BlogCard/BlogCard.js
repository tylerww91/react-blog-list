import React from 'react';
import './BlogCard.css';

export default function BlogCard({ title, subtitle, text, image, authors }) {
  return (
    <div className="blog-card">
      <div className="details">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
        <p className="author">Written by: {authors.name}</p>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
