import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BoardSection = () => {
  const boardMembers = [
    {
      name: 'FRANCIS MIGUEL',
      position: 'Chief Finance Officer',
      description: 'Overseeing financial strategy and global investments',
      tag: 'Financial Stewardship',
      icon: 'fas fa-chart-line',
      color: '#4A90E2'
    },
    {
      name: 'DR. ED CABANTOG',
      position: 'Visionary President / CEO',
      description: 'Leading the vision since 2006',
      tag: 'Founder & Strategic Director • Visionary Leadership',
      icon: 'fas fa-crown',
      color: '#D4AF37',
      isMain: true
    },
    {
      name: 'MR. JOHN ASPERIN',
      position: 'Chief Marketing Officer',
      description: 'Global brand expansion & market strategy',
      tag: 'Marketing Excellence',
      icon: 'fas fa-bullhorn',
      color: '#50C878'
    }
  ];

  return (
    <section id="board" className="section-padding" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center animate-fade-up">
          <span className="badge bg-warning text-dark px-4 py-2 rounded-pill mb-3">
            <i className="fas fa-users me-2"></i> LEADERSHIP TEAM
          </span>
          <h2 className="section-title">
            BOARD OF <span className="golden-text">DIRECTORS</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Meet the visionary leaders driving Golden Dreamers to empower millions worldwide
          </p>
        </div>

        {/* Board Members Grid - Centered */}
        <Row className="justify-content-center mt-5">
          {boardMembers.map((member, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <div 
                className="board-card animate-fade-up" 
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="board-icon">
                  <i className={member.icon}></i>
                </div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="description">{member.description}</p>
                <div className="board-tag">
                  <i className="fas fa-star me-1" style={{ fontSize: '10px' }}></i>
                  {member.tag}
                </div>
                
                {/* Decorative element */}
                <div style={{ 
                  height: '3px', 
                  background: `linear-gradient(90deg, transparent, ${member.color}, transparent)`,
                  marginTop: '20px',
                  width: '50%',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}></div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Unified Leadership Note */}
        <div className="text-center mt-5 pt-4">
          <div className="gold-card d-inline-block" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <i className="fas fa-handshake display-4 golden-text mb-3"></i>
            <h4 className="fw-bold mb-2">UNIFIED LEADERSHIP FOR GLOBAL IMPACT</h4>
            <p className="text-muted mb-0">
              Under the guidance of <strong className="golden-text">Dr. Ed Cabantog</strong>, financial excellence by{' '}
              <strong className="golden-text">Francis Miguel</strong>, and market expansion by{' '}
              <strong className="golden-text">John Asperin</strong>, Golden Dreamers continues to empower communities across 60+ countries.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BoardSection;