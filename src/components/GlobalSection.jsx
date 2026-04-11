import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GlobalSection = () => {
  const countries = ['Philippines', 'Taiwan', 'Singapore', 'Brunei', 'Kuwait', 'Papua New Guinea', 'UAE', 'Ghana', 'Togo', 'Ivory Coast', 'Cameroon', 'Pakistan', 'Nigeria', 'Uganda', 'Kenya', 'Tanzania', 'Rwanda'];

  return (
    <section id="global" className="section-padding" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
      <Container>
        <div className="text-center animate-fade-up">
          <i className="fas fa-globe-africa display-1 golden-text mb-3"></i>
          <h2 className="section-title text-white">
            CURRENTLY IN OVER <span className="golden-text">60 COUNTRIES</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="text-white-50 mb-5">Worldwide Presence</p>
        </div>

        {/* Countries Grid */}
        <Row className="justify-content-center g-3 mb-5">
          {countries.map((country, idx) => (
            <Col lg="auto" key={idx}>
              <span className="d-inline-block px-4 py-2 bg-white/10 rounded-pill text-white border border-warning/30 hover-scale">
                <i className="fas fa-map-marker-alt text-warning me-2"></i>
                {country}
              </span>
            </Col>
          ))}
        </Row>

        {/* Kenya Offices */}
        <Row className="justify-content-center mt-5">
          <Col lg={8}>
            <div className="gold-card text-center" style={{ background: 'rgba(255,255,255,0.95)' }}>
              <i className="fas fa-building display-3 golden-text mb-3"></i>
              <h3 className="fw-bold mb-4">OFFICES IN KENYA, AFRICA</h3>
              <Row>
                <Col md={6}>
                  <div className="p-3">
                    <i className="fas fa-location-dot text-warning fs-4 mb-2"></i>
                    <p className="mb-0"><strong>TON HOUSE</strong></p>
                    <p className="text-muted">E CBD, NAIROBI</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="p-3">
                    <i className="fas fa-building text-warning fs-4 mb-2"></i>
                    <p className="mb-0"><strong>DAIMA TOWERS</strong></p>
                    <p className="text-muted">8th Floor, Eldoret, Uasin Gishu County</p>
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
      </Container>
    </section>
  );
};

export default GlobalSection;