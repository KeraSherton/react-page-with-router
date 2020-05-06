import React from "react";
import Article from "../components/Article.js";

const articles = [
  {
    id: 1,
    title: "What is love?",
    author: "John Snow",
    text:
      "Lorem ipsum dolor sit amet consectetur. Atque amet, vitae consequatur exercitationem ratione voluptatibus?"
  },
  {
    id: 2,
    title: "Baby don't hurt me",
    author: "John Snow",
    text:
      "Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad."
  },
  {
    id: 3,
    title: "Don't hurt me",
    author: "John Snow",
    text:
      "Bleade d'hoine, app er arse."
  },  {
    id: 3,
    title: "No more",
    author: "John Wather",
    text:
      "Animi cumque accusantium sapiente error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
