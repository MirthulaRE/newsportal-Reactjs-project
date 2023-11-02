import React from 'react';

function NewsItem({ item }) {
  // Ensure the URL is not undefined before attempting to split it.
  const websiteUrl = item.url || '';
  // Extract the domain from the URL using URL object.
  const urlObject = new URL(websiteUrl);
  const website = urlObject.hostname;

  // Ensure the date is not undefined before formatting it.
  const date = item.publishedAt || '';
  // Format date and time.
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = new Date(date).toLocaleTimeString();

  return (
    <a href={item.url} className="article" target="_blank" rel="noopener noreferrer">
      <div className="article-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>
      <div className="article-content">
        <div className="article-source">
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
            alt={item.source.id}
          />
          <span>{item.source.name}</span>
        </div>
        <div className="article-title">
          <h2>{item.title}</h2>
        </div>
        <p className="article-description">{item.description}</p>
        <div className="article-details">
          <small>
            <b>Published Date: </b>
            {formattedDate}
          </small>
          <br />
          <small>
            <b>Published Time: </b>
            {formattedTime}
          </small>
        </div>
      </div>
    </a>
  );
}

export default NewsItem;
