import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  const coreValues = [
    { icon: "fas fa-handshake", title: "Integrity", description: "Building trust through transparent business practices", color: "#4A90E2" },
    { icon: "fas fa-chart-line", title: "Growth", description: "Continuous personal and professional development", color: "#50C878" },
    { icon: "fas fa-users", title: "Community", description: "Empowering leaders who lift others", color: "#D4AF37" },
    { icon: "fas fa-gem", title: "Excellence", description: "Delivering premium products and systems", color: "#9B59B6" },
  ];

  // Use local images from public/images/static folder
  // Make sure your images are in: public/images/static/
  const ceoImage = "/images/static/IMG-20260406-WA0488.jpg";
  const ceoAlternateImage = "/images/static/IMG-20260406-WA0251.jpg";

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

        {/* CEO Message with Photo */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="gold-card animate-fade-up" style={{ 
              background: 'linear-gradient(135deg, #fff9f0, #fff5e6)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <Row className="align-items-center">
                <Col md={4} className="text-center">
                  <div className="animate-float">
                    <img 
                      src={ceoImage}
                      alt="CEO Paul Barasa"
                      style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid #D4AF37',
                        boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = ceoAlternateImage;
                      }}
                    />
                    {/* Gold badge overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '20px',
                      background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid white'
                    }}>
                      <i className="fas fa-crown text-white"></i>
                    </div>
                  </div>
                </Col>
                <Col md={8} className="text-center text-md-start">
                  <h3 className="fw-bold mb-2" style={{ color: '#B8860B' }}>PAUL BARASA</h3>
                  <p className="text-warning fw-semibold mb-3">Junior Leader & CEO, Golden Dreamers</p>
                  <p className="text-muted fst-italic fs-5">
                    "I build Leaders that last. Our mission is to create a legacy of empowered individuals 
                    who not only achieve their own dreams but also lift others along the way."
                  </p>
                  <div className="d-flex gap-2 mt-3">
                    <i className="fas fa-quote-right text-warning opacity-50 fs-1"></i>
                    <div>
                      <span className="badge bg-warning text-dark">Since 2006</span>
                      <span className="badge bg-warning text-dark ms-2">Visionary Leader</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="justify-content-center mb-5">
          <Col lg={5} className="mb-4">
            <div className="gold-card text-center h-100 animate-fade-left" style={{
              borderRadius: '20px',
              padding: '2rem',
              background: 'white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}>
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
            <div className="gold-card text-center h-100 animate-fade-right" style={{
              borderRadius: '20px',
              padding: '2rem',
              background: 'white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 20px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              <div className="gold-card text-center h-100 animate-fade-up" style={{ 
                animationDelay: `${idx * 0.1}s`,
                borderRadius: '20px',
                padding: '1.5rem',
                background: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(212,175,55,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}>
                <div style={{ width: '60px', height: '60px', margin: '0 auto 15px', background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`${value.icon} fs-2 text-white`}></i>
                </div>
                <h4 className="fw-bold mb-2">{value.title}</h4>
                <p className="text-muted small">{value.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Additional Info - Company Milestones */}
        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div className="text-center p-4 rounded-4" style={{ 
              background: 'linear-gradient(135deg, #f8f9fa, #fff)',
              border: '1px solid rgba(212,175,55,0.3)'
            }}>
              <i className="fas fa-chart-line display-4 golden-text mb-3"></i>
              <h4 className="fw-bold mb-3">Company Milestones</h4>
              <Row className="g-3">
                <Col md={4}>
                  <div className="p-2">
                    <h5 className="text-warning fw-bold">2006</h5>
                    <p className="small text-muted mb-0">Foundation Established</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-2">
                    <h5 className="text-warning fw-bold">2018</h5>
                    <p className="small text-muted mb-0">African Headquarters in Kenya</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-2">
                    <h5 className="text-warning fw-bold">2024</h5>
                    <p className="small text-muted mb-0">1 Million Lives Impacted</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .golden-text {
          background: linear-gradient(135deg, #D4AF37, #B8860B);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .gold-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #D4AF37, #B8860B);
          margin: 20px auto;
          border-radius: 2px;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
        }
        .section-subtitle {
          text-align: center;
          color: #666;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out;
        }
        .animate-fade-left {
          animation: fadeLeft 0.6s ease-out;
        }
        .animate-fade-right {
          animation: fadeRight 0.6s ease-out;
        }
        .animate-float {
          position: relative;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .gold-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;