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
    date: '2025-07',
    title: 'Product Development Continues...',
    summary: 'Our next generation fault detection and root cause diagnosis software is nearly ready',
    content: 'The team are hard at work bringing next-generation prescriptive maintenance software to the market. Watch this space for future updates and news from Kausalyze — or get in touch for early access. (Image AI Generated)',
    images: ['img/news/prod_dev_ai.png'

    ], // Add image URL if you have one
  },
  {
    date: '2025-06-04',
    title: 'Plug and Play Smart Cities Sugar Land (Batch 1)',
    summary: 'Kausalyze complete the Smart Cities Accelerator facilitated by Plug and Play in the city of Sugar Land!',
    content: 'Over the last 12 weeks, Kausalyze have been hard at working completing the Plug and Play Smart Cities accelerator, supported by the city of Sugar Land government. Want to hear more about it? Get in touch! ',
    images: ['https://cdn.playbook.vc/media/thumbnails/https3A2F2Fcdn.evbuc.com2Fimages2F10221985032F26046911383012F12Foriginal.20250502-212911autoformat2Ccompressq75sharp10s1b19dd680b0c40926e9644583abcbfb4?Expires=1747671045&Signature=Z7LNBVHZY37MLK~S-T6aob4-Knu4vGnCPVhMl-Alex-o0CoG6AMrJT9DlQOB3S~aiZ7e7U1cAIXyUXm41Pbhe5QG0uY1xQYe7ijr1w9HPIPCOojJ3JIbqAtCokUAeswXzHVYKIlRivakvcRfSCDAPzRPOnw8zDzLeUlLrnt-NZQs4ZVpKYx7gHUClK2r3BeCKBiOIXjtI8K7gpXk2eI-WXmKKpkY5lnKFGmgAOrWrnEtPXm-95WhYF2xDTvyPOx3lOsIFSzTta-PDAIHAUkvQ7wN15r6s1EYI9L6~Ah4ohR5xay4XxHNXBu8bLLuaNncJLic799xPaFnFtemPkG-Ow__&Key-Pair-Id=K1EZH924FG48TE'

    ], // Add image URL if you have one
  },
  {
    date: '2025-04-01',
    title: 'Houston bound!',
    summary: 'Louis is representing Kausalyze on a trip to the US this month.',
    content: 'In April, Louis took to the skies across on a mini US road trip, starting in Houston, catching up with new customers and mentors. He also represented Kausalyze at the AIChE in Dallas where he was able to demonstrate the power causal AI can have on manufacturing. If you\'re interested, get in touch!  ',
    images: ['img/news/aiche_2025.jpeg'], // Add image URL if you have one
  },
  {
    date: '2025-03-26',
    title: 'Digital Forge Sheffield',
    summary: 'We had a great time presenting at the Digital Forge Sheffield event in March.',
    content: 'Thank you to everyone who came to watch Louis pitch, and thank you to all those who came to talk to us afterwards. ',
    image: 'img/news/louis_digital_forge.jpeg', // Add image URL if you have one
  },
  {
    date: '2025-03-17',
    title: 'Digital Forge Sheffield',
    summary: 'We are excited to announce that Louis will be speaking on behalf of Kausalyze at the Digital Forge Sheffield event on the 26th of March 2025.',
    content: 'Both Louis and Steve will be at the event, get your ticket now and head down to hear Louis talk and meet the team.',
    image: '' // Add image URL if you have one
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

                  {/* Support for multiple images */}
                  {((item.images && item.images.length > 0) || item.image) && (
                    <div className="news-item-images">
                      {/* Legacy support for single image */}
                      {item.image && !item.images && (
                        <div className="news-item-image">
                          <img src={item.image} alt={item.title} />
                        </div>
                      )}

                      {/* New multiple images format */}
                      {item.images && item.images.map((image, i) => (
                        <div key={i} className="news-item-image">
                          <img
                            src={typeof image === 'string' ? image : image.src}
                            alt={typeof image === 'string' ? `${item.title} - Image ${i + 1}` : (image.alt || `${item.title} - Image ${i + 1}`)}
                          />
                          {typeof image === 'object' && image.caption && (
                            <div className="image-caption">{image.caption}</div>
                          )}
                        </div>
                      ))}
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