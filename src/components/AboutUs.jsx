import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  const coreValues = [
    { icon: "fas fa-handshake", title: "Integrity", description: "Building trust through transparent business practices", color: "#4A90E2" },
    { icon: "fas fa-chart-line", title: "Growth", description: "Continuous personal and professional development", color: "#50C878" },
    { icon: "fas fa-users", title: "Community", description: "Empowering leaders who lift others", color: "#D4AF37" },
    { icon: "fas fa-gem", title: "Excellence", description: "Delivering premium products and systems", color: "#9B59B6" },
  ];

  return (
    <section id="about" className="section-padding" style={{ background: '#fff' }}>
      <Container>
        {/* Header */}
        <div className="text-center animate-fade-up">
          <span className="badge bg-warning text-dark px-4 py-2 rounded-pill mb-3">
            <i className="fas fa-info-circle me-2"></i> OUR STORY
          </span>
          <h2 className="section-title">
            About <span className="golden-text">Golden Dreamers</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Since 2006, we've been at the forefront of network marketing innovation
          </p>
        </div>

        {/* CEO Message */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="gold-card animate-fade-up" style={{ background: 'linear-gradient(135deg, #fff9f0, #fff5e6)' }}>
              <Row className="align-items-center">
                <Col md={4} className="text-center">
                  <div className="animate-float">
                    <div style={{
                      width: '150px',
                      height: '150px',
                      margin: '0 auto',
                      background: 'linear-gradient(135deg, var(--gold-primary), var(--gold-dark))',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
                    }}>
                      <i className="fas fa-crown display-1 text-white"></i>
                    </div>
                  </div>
                </Col>
                <Col md={8} className="text-center text-md-start">
                  <h3 className="fw-bold mb-2">PAUL BARASA</h3>
                  <p className="text-warning fw-semibold mb-3">Junior Leader & CEO, Golden Dreamers</p>
                  <p className="text-muted fst-italic fs-5">
                    "I build Leaders that last. Our mission is to create a legacy of empowered individuals 
                    who not only achieve their own dreams but also lift others along the way."
                  </p>
                  <i className="fas fa-quote-right text-warning opacity-50 fs-1"></i>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="justify-content-center mb-5">
          <Col lg={5} className="mb-4">
            <div className="gold-card text-center h-100 animate-fade-left">
              <div style={{ width: '70px', height: '70px', margin: '0 auto 20px', background: 'linear-gradient(135deg, #4A90E2, #357ABD)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-bullseye fs-1 text-white"></i>
              </div>
              <h3 className="fw-bold mb-3">Our Mission</h3>
              <p className="text-muted">
                To impact <strong className="golden-text">1,000,000 lives positively</strong> through our systems by 2025
              </p>
            </div>
          </Col>
          <Col lg={5} className="mb-4">
            <div className="gold-card text-center h-100 animate-fade-right">
              <div style={{ width: '70px', height: '70px', margin: '0 auto 20px', background: 'linear-gradient(135deg, var(--gold-primary), var(--gold-dark))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-eye fs-1 text-white"></i>
              </div>
              <h3 className="fw-bold mb-3">Our Vision</h3>
              <p className="text-muted">
                World's leading network marketing organization, recognized for integrity and innovation
              </p>
            </div>
          </Col>
        </Row>

        {/* Core Values */}
        <div className="text-center mt-5">
          <h3 className="fw-bold mb-4">Our <span className="golden-text">Core Values</span></h3>
          <div className="gold-divider"></div>
        </div>
        <Row className="justify-content-center mt-4">
          {coreValues.map((value, idx) => (
            <Col lg={3} md={6} key={idx} className="mb-4">
              <div className="gold-card text-center h-100 animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div style={{ width: '60px', height: '60px', margin: '0 auto 15px', background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`${value.icon} fs-2 text-white`}></i>
                </div>
                <h4 className="fw-bold mb-2">{value.title}</h4>
                <p className="text-muted small">{value.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;