import React from 'react';

const Article = ({ title, content, tags, createdAt }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <p>{createdAt}</p>
    </div>
  );
};

export default Article;