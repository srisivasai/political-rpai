import React from 'react';
import './NewsItem.css';

const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <div className="news-image-wrapper">
        <img src={article.urlToImage} alt={article.title} className="news-image" />
        <div className="news-title-overlay">
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-title-link">
            <h3 className="news-title">{article.title}</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
