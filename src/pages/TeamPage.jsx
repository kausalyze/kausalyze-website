import React from 'react';
import './TeamPage.css'; // We'll create this file next

const TeamPage = () => {
  // Scroll to top when the page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample team data - replace with your actual team members
  const teamMembers = [
    {
      id: 1,
      name: 'Louis Allen',
      role: 'Founder & CEO',
      bio: 'Louis founded Kausalyze with a vision to transform process manufacturing through AI and engineering expertise.',
      imageUrl: '/img/team/louis-allen.jpg', // Add your image to public/img/team/
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Jane brings 15+ years of experience in AI and machine learning to lead our technical strategy and innovation.',
      imageUrl: '/img/team/jane-smith.jpg',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Lead Engineer',
      bio: 'Michael specializes in process optimization and implementing AI solutions for manufacturing environments.',
      imageUrl: '/img/team/michael-johnson.jpg',
    },
    // Add more team members as needed
  ];

  return (
    <main className="page-container" id="team">
      <div className="team-page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p className="lead">
            Meet the experts behind Kausalyze who are revolutionizing process manufacturing with innovative AI solutions.
          </p>
        </div>
      </div>

      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-member-card" key={member.id}>
                <div className="team-member-image">
                  <img src={member.imageUrl} alt={member.name} />
                </div>
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;