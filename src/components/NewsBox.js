import React, { useEffect, useState } from 'react';
import './NewsBox.css';  // Make sure to create and import the CSS file

const NewsBox = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=98a9f24a900c46c59e3b93d8c9aedcb6');
        const data = await response.json();
        console.log('API Response:', data);  // Log the entire response

        if (data.status === 'ok' && data.articles && data.articles.length > 0) {
          setNews(data.articles);
        } else if (data.status === 'error') {
          throw new Error(data.message || 'Unknown error');
        } else {
          throw new Error('No articles found');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="big-rectangle"><h2>Live News</h2><p>Loading news...</p></div>;
  }

  if (error) {
    return <div className="big-rectangle"><h2>Live News</h2><p>Error loading news: {error}</p></div>;
  }

  return (
    <div className="big-rectangle">
      <h2>Live News</h2>
      <div className="news-feed">
        {news.map((article, index) => (
          <div key={index} className="news-article">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
            <p>{article.description}</p>
            <p><strong>Source:</strong> {article.source.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBox;
