import React from "react";
import "../styles/Article.css";

const Article = props => {
  return (
    <div className="article_box">
      <h3 className="article_title">{props.title}</h3>
      <span className="article_author">{props.author}</span>
      <p className="article_text">{props.text}</p>
    </div>
  );
};

export default Article;
