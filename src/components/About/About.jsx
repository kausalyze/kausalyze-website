import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

const About = () => {
  const location = useLocation();

  // Scroll to specific section if URL has a hash
  useEffect(() => {
    if (location.hash) {
      // Remove the # character
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  const teamMembers = [
    {
      img: "/img/team/louis3.jpg",
      name: "Dr. Louis Allen",
      role: "Founder & CEO",
      bio: "Chemical engineer turned AI innovator, transforming industrial complexity into clarity through domain-driven machine learning solutions.",
      linkedin: "https://linkedin.com/in/louis-allen-sheff"
    },
    {
      img: "/img/team/steve.jpeg",
      name: "Steve Kerridge",
      role: "Executive Chair",
      bio: "Experienced business leader with over 20 years in software and technology development.",
      linkedin: "https://www.linkedin.com/in/steve-kerridge-3a5264/"
    },
    {
      img: "/img/team/joan.jpg",
      name: "Professor Joan Cordiner",
      role: "Technical Advisor",
      bio: "30+ years in process industries. Professor of Process Manufacturing at the University of Sheffield.",
      linkedin: "https://sites.google.com/sheffield.ac.uk/the-cordiner-group/group"
    }
  ];

  const supporters = [
    { name: "University of Sheffield", logo: "/img/supporters/uos-logo-2.png" },
    { name: "Innovate UK", logo: "/img/supporters/innovate_uk.png" },
    { name: "ICURe Explore", logo: "/img/supporters/icure-explore.png" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>About Kausalyze</h2>
          <p className="section-subtitle">
            University spin-out combining academic research with real-world industrial expertise
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h3>Our Story</h3>
            <p>
              Kausalyze emerged from the University of Sheffield born from a critical insight: process manufacturers lose 11% of annual revenue to unplanned downtime, with complex processes producing vast amounts of data that traditional analysis methods struggle to interpret effectively.
            </p>
            <p>
              Dr. Louis Allen, our founder and CEO, developed Kausalyze's core technology during his PhD research, combining his experience as a process improvement engineer with advanced AI capabilities. Working alongside Professor Joan Cordiner, a Fellow of the Royal Academy of Engineering, and Steve Kerridge, an experienced business leaderwith multiple successful university spinouts, the team created a solution that addresses the fundamental challenges of industrial process downtime.
            </p>
            <p>
              Our engineering-first approach stands in stark contrast to generic AI solutions. We've built a system that integrates deep chemical engineering domain knowledge with generative AI, enabling it to analyze complex, noisy process data and provide clear, actionable insights that can reduce unplanned downtime by up to 40% while optimizing resource utilization across entire manufacturing plants.
            </p>
          </div>

          <div className="about-mission">
            <div className="mission-container">
              <div className="mission-content">
                <h3>Our Mission</h3>
                <p>
                  We're on a mission to transform process manufacturing by empowering companies to move from reactive firefighting to proactive foresight. Through our innovative combination of domain expertise and artificial intelligence, we help manufacturers understand the true causal mechanisms driving process changes, enabling informed decisions that prevent costly downtime before it happens.
                </p>
                <ul className="mission-list">
                  <li>
                    <i className="fas fa-check-circle list-icon"></i>
                    <span>Prevent downtime before it happens, not just predict it</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle list-icon"></i>
                    <span>Capture and preserve critical plant knowledge</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle list-icon"></i>
                    <span>Reduce energy consumption and improve sustainability</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle list-icon"></i>
                    <span>Deliver clear, actionable insights, not just raw data</span>
                  </li>
                </ul>
              </div>
              <div className="mission-image">
                <div className="image-placeholder">
                  <i className="fas fa-lightbulb"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section" id="team">
          <h3>Our Team</h3>
          <p className="team-description">
            Our team combines years of process engineering expertise with cutting-edge AI development skills. We understand complex industrial processes from the inside out, allowing us to build solutions that address real-world manufacturing challenges.
          </p>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="member-image">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="member-details">
                  <h4>{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="supporters-section" id="supporters">
          <h3>Our Supporters</h3>
          <p className="supporters-description">
            We're proud to be backed by leading institutions and innovation partners who share our vision for the future of process manufacturing.
          </p>

          <div className="supporters-grid">
            {supporters.map((supporter, index) => (
              <div className="supporter-card" key={index}>
                <img src={supporter.logo} alt={supporter.name} />
                <span>{supporter.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
