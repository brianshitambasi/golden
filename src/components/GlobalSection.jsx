import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GlobalSection = () => {
  const countries = [
    { name: 'Philippines', code: 'PH', flag: 'https://flagcdn.com/w320/ph.png' },
    { name: 'Taiwan', code: 'TW', flag: 'https://flagcdn.com/w320/tw.png' },
    { name: 'Singapore', code: 'SG', flag: 'https://flagcdn.com/w320/sg.png' },
    { name: 'Brunei', code: 'BN', flag: 'https://flagcdn.com/w320/bn.png' },
    { name: 'Kuwait', code: 'KW', flag: 'https://flagcdn.com/w320/kw.png' },
    { name: 'Papua New Guinea', code: 'PG', flag: 'https://flagcdn.com/w320/pg.png' },
    { name: 'UAE', code: 'AE', flag: 'https://flagcdn.com/w320/ae.png' },
    { name: 'Ghana', code: 'GH', flag: 'https://flagcdn.com/w320/gh.png' },
    { name: 'Togo', code: 'TG', flag: 'https://flagcdn.com/w320/tg.png' },
    { name: 'Ivory Coast', code: 'CI', flag: 'https://flagcdn.com/w320/ci.png' },
    { name: 'Cameroon', code: 'CM', flag: 'https://flagcdn.com/w320/cm.png' },
    { name: 'Pakistan', code: 'PK', flag: 'https://flagcdn.com/w320/pk.png' },
    { name: 'Nigeria', code: 'NG', flag: 'https://flagcdn.com/w320/ng.png' },
    { name: 'Uganda', code: 'UG', flag: 'https://flagcdn.com/w320/ug.png' },
    { name: 'Kenya', code: 'KE', flag: 'https://flagcdn.com/w320/ke.png' },
    { name: 'Tanzania', code: 'TZ', flag: 'https://flagcdn.com/w320/tz.png' },
    { name: 'Rwanda', code: 'RW', flag: 'https://flagcdn.com/w320/rw.png' }
  ];

  return (
    <section id="global" className="section-padding" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
      <Container>
        {/* Header */}
        <div className="text-center animate-fade-up">
          <i className="fas fa-globe-africa display-1 golden-text mb-3"></i>
          <h2 className="section-title text-white">
            CURRENTLY IN OVER <span className="golden-text">60 COUNTRIES</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="text-white-50 mb-5">Worldwide Presence Across the Globe</p>
        </div>

        {/* Countries Grid with Flag Images */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="countries-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '12px'
            }}>
              {countries.map((country, idx) => (
                <div 
                  key={idx} 
                  className="d-flex align-items-center px-3 py-2 bg-white/10 rounded-pill text-white border border-warning/30 hover-scale"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    style={{ 
                      width: '30px', 
                      height: '20px', 
                      objectFit: 'cover',
                      borderRadius: '2px',
                      marginRight: '12px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
                    }}
                  />
                  <span className="fw-bold me-2" style={{ minWidth: '35px', color: '#D4AF37' }}>{country.code}</span>
                  <span className="flex-grow-1">{country.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Additional Countries Note */}
        <div className="text-center mb-5">
          <span className="d-inline-block px-4 py-2 bg-warning/20 rounded-pill text-warning border border-warning/50">
            <i className="fas fa-plus-circle me-2"></i>
            And 40+ more countries across Asia, Africa, Europe, and Middle East
          </span>
        </div>

        {/* Kenya Offices */}
        <Row className="justify-content-center mt-5">
          <Col lg={8}>
            <div className="gold-card text-center" style={{ background: 'rgba(255,255,255,0.95)' }}>
              <div className="mb-3 d-flex justify-content-center align-items-center gap-3">
                <img 
                  src="https://flagcdn.com/w320/ke.png" 
                  alt="Kenya flag"
                  style={{ width: '50px', height: '33px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <i className="fas fa-building display-3 golden-text mx-2"></i>
                <img 
                  src="https://flagcdn.com/w320/ke.png" 
                  alt="Kenya flag"
                  style={{ width: '50px', height: '33px', objectFit: 'cover', borderRadius: '4px' }}
                />
              </div>
              <h3 className="fw-bold mb-4">OFFICES IN KENYA, AFRICA</h3>
              <Row>
                <Col md={6}>
                  <div className="p-3">
                    <i className="fas fa-location-dot text-warning fs-4 mb-2"></i>
                    <p className="mb-0"><strong>CAXTON HOUSE</strong></p>
                    <p className="text-muted">KENYATTA AVENUE CBD, NAIROBI</p>
                    <span className="badge bg-warning text-dark mt-2">
                      <img 
                        src="https://flagcdn.com/w320/ke.png" 
                        alt="Kenya"
                        style={{ width: '16px', height: '11px', marginRight: '5px', borderRadius: '1px' }}
                      />
                      Headquarters
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="p-3">
                    <i className="fas fa-building text-warning fs-4 mb-2"></i>
                    <p className="mb-0"><strong>DAIMA TOWERS</strong></p>
                    <p className="text-muted">8th Floor, Eldoret, Uasin Gishu County</p>
                    <span className="badge bg-warning text-dark mt-2">
                      <img 
                        src="https://flagcdn.com/w320/ke.png" 
                        alt="Kenya"
                        style={{ width: '16px', height: '11px', marginRight: '5px', borderRadius: '1px' }}
                      />
                      Regional Office
                    </span>
                  </div>
                </Col>
              </Row>
              <div className="mt-3 pt-2 border-top">
                <i className="fas fa-globe text-warning me-2"></i>
                <strong>OBI</strong> — Alliance In Motion Global Kenya Ltd
              </div>
            </div>
          </Col>
        </Row>

        {/* World Map Visualization */}
        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div className="text-center p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <i className="fas fa-chart-line display-4 text-warning mb-3"></i>
              <h4 className="text-white mb-3">Expanding Globally</h4>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <div className="text-center">
                  <span className="display-6">🌍</span>
                  <p className="text-white-50 small mt-1 mb-0">Africa</p>
                  <small className="text-warning">12+ Countries</small>
                </div>
                <div className="text-center">
                  <span className="display-6">🌏</span>
                  <p className="text-white-50 small mt-1 mb-0">Asia</p>
                  <small className="text-warning">15+ Countries</small>
                </div>
                <div className="text-center">
                  <span className="display-6">🌎</span>
                  <p className="text-white-50 small mt-1 mb-0">Americas</p>
                  <small className="text-warning">5+ Countries</small>
                </div>
                <div className="text-center">
                  <span className="display-6">🌍</span>
                  <p className="text-white-50 small mt-1 mb-0">Europe</p>
                  <small className="text-warning">8+ Countries</small>
                </div>
                <div className="text-center">
                  <span className="display-6">🇦🇪</span>
                  <p className="text-white-50 small mt-1 mb-0">Middle East</p>
                  <small className="text-warning">10+ Countries</small>
                </div>
              </div>
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
        .hover-scale {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .hover-scale:hover {
          transform: translateX(5px);
          background: #D4AF37 !important;
          color: #1a1a2e !important;
        }
        .hover-scale:hover span {
          color: #1a1a2e !important;
        }
        .gold-card {
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .gold-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </section>
  );
};

export default GlobalSection;