import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './TopPicks.css';

const TopPicks = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            category: 'politics',
            apiKey: '98a9f24a900c46c59e3b93d8c9aedcb6'
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <div className="top-picks-wrapper">
      <h2 className="top-picks-title">Top Picks</h2>
      <div className="top-picks-content-wrapper">
        {articles.length > 0 && (
          <div className="top-picks-content">
            <button className="nav-button left" onClick={handlePrev}>‹</button>
            <NewsItem article={articles[currentIndex]} />
            <button className="nav-button right" onClick={handleNext}>›</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopPicks;
