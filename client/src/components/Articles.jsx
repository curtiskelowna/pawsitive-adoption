import React, { useEffect, useState } from 'react';
import "../styles/Articles.scss";

function Articles() {
  const [dogArticles, setDogArticles] = useState([]);
  const [catArticles, setCatArticles] = useState([]);

  useEffect(() => {
    // Fetch dog adoption articles
    fetchDogArticles()
      .then(articles => setDogArticles(articles))
      .catch(error => console.error("Error fetching dog articles:", error));

    // Fetch cat adoption articles
    fetchCatArticles()
      .then(articles => setCatArticles(articles))
      .catch(error => console.error("Error fetching cat articles:", error));
  }, []);

  // Function to fetch dog adoption articles
  const fetchDogArticles = async () => {
    const dogArticles = [
      {
        title: "10 Statistics on Dog Adoption in 2023",
        link: "https://rockykanaka.com/youll-be-amazed-by-these-10-statistics-on-dog-adoption-in-2023/",
      },
      {
        title: "Why one Ontario animal rescue is being inundated with unwanted dogs",
        link: "https://globalnews.ca/news/9770487/ontario-dog-rescue-overwhelm-precious-paws-rescue/",
      },
      {
        title: "These Canadian pet adoption stories will melt your heart",
        link: "https://nationalpost.com/sponsored/life-sponsored/these-canadian-pet-adoption-stories-will-melt-your-heart",
      },
    ];
    return dogArticles;
  };

  // Function to fetch cat adoption articles
  const fetchCatArticles = async () => {
    const catArticles = [
      {
        title: "Kitchener Stray Cat Rescue being displaced by high-rise development",
        link: "https://kitchener.ctvnews.ca/kitchener-stray-cat-rescue-being-displaced-by-high-rise-development-1.6581905",
      },
      {
        title: "Increasing costs forcing families to surrender pets, B.C. rescue groups say",
        link: "https://globalnews.ca/news/9945270/animal-rescue-groups-bc-surrender-pets-cost-of-living/",
      },
      {
        title: "Cat Adoption in Canada: What to Consider",
        link: "https://www.rover.com/ca/blog/cat-adoption-in-canada/",
      },
    ];
    return catArticles;
  };

  // Function to render a list of article links
  const renderArticleLinks = (articles) => {
    return articles.map((article, index) => (
      <div key={index} className="article-link">
        <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
      </div>
    ));
  };

  return (
    <div className="article-body">
      <div className="dog-article">
        <h1>Dogs</h1>
        {renderArticleLinks(dogArticles)}
      </div>
      <div className="cat-article">
        <h1>Cats</h1>
        {renderArticleLinks(catArticles)}
      </div>
    </div>
  );
}

export default Articles;
