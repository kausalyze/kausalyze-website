import React from 'react';
import './NewsPage.css';

// Add new news items at the TOP of this array
// Format:
// {
//   date: 'YYYY-MM-DD',
//   title: 'News article title',
//   summary: 'Brief summary text',
//   content: 'Full article content, can include multiple paragraphs',
//   links: [                             // You can add multiple links (optional)
//     {
//       url: 'https://example.com',      // The URL to link to
//       text: 'Read the full article',   // The text to display (optional, defaults to "Read more")
//       isPrimary: true                  // Whether this is the primary link (optional, defaults to false)
//     }
//   ],
//   image: 'url-to-image.jpg'            // Optional image URL
// }
const newsItems = [
  {
    date: '2025-03-17',
    title: 'Digital Forge Sheffield',
    summary: 'We are excited to announce that Louis will be speaking on behalf of Kausalyze at the Digital Forge Sheffield event on the 26th of March 2025.',
    content: 'Both Louis and Steve will be at the event, get your ticket now and head down to hear Louis talk and meet the team.',
    image: '', // Add image URL if you have one
    links: [{
      url: 'https://lu.ma/2nw7zdx2',
      text: 'Register for the event',
      isPrimary: true
    }]
  },
  {
    date: '2025-03-15',
    title: 'Kausalyze Launches New Website',
    summary: 'We are excited to announce the launch of our newly redesigned website.',
    content: 'Today marks the launch of our completely redesigned website, aimed at providing a better user experience and more information about our AI-driven process manufacturing solutions.',
    image: '', // Add image URL if you have one
    links: []
  },
  {
    date: '2024-11-08',
    title: 'CEO Louis Allen is a finalist at the IChemE Global Awards',
    summary: 'Our CEO was acknowledged for impactful research addressing critical technical, economic, and environmental issues.',
    content: "Established in 1994, the IChemE Global Awards are widely recognised as the world's most prestigious chemical engineering awards. They celebrate chemical engineering excellence and cover the breadth of the chemical and process industries.",
    links: [
      {
        url: 'https://www.sheffield.ac.uk/cmbe/news/success-icheme-global-awards',
        text: 'View Sheffield University announcement',
        isPrimary: true
      },
      {
        url: 'https://www.icheme.org/about-us/awards/icheme-global-awards/',
        text: 'Learn more about IChemE Awards'
      }
    ]
  }
];

const NewsPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format date to display in a more readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <main className="news-page">
      <div className="container">
        <div className="news-header">
          <h1>News & Updates</h1>
          <div className="section-subtitle">
            Stay up to date with the latest developments and announcements from Kausalyze
          </div>
        </div>

        <div className="news-content">
          {newsItems.length === 0 ? (
            <p className="no-news">Check back soon for news and updates!</p>
          ) : (
            <div className="news-items">
              {newsItems.map((item, index) => (
                <article key={index} className="news-item">
                  <div className="news-item-date">{formatDate(item.date)}</div>
                  <h2 className="news-item-title">{item.title}</h2>
                  {item.image && (
                    <div className="news-item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                  )}
                  <p className="news-item-summary">{item.summary}</p>
                  <div className="news-item-content">
                    {item.content.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Support for multiple links */}
                  {(item.links && item.links.length > 0) || item.link ? (
                    <div className="news-item-links">
                      {/* Legacy support for old link format */}
                      {item.link && (
                        <a
                          href={item.link}
                          className="news-item-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read more
                        </a>
                      )}

                      {/* New links array format */}
                      {item.links && item.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          className={`news-item-link ${link.isPrimary ? 'primary' : 'secondary'}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.text || "Read more"}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default NewsPage;