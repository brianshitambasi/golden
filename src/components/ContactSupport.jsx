import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const supportContacts = [
    {
      name: 'MR. PAUL BARASA',
      title: 'CEO & Founder',
      phone: '+254 708 956451',
      phoneShort: '0708 956451',
      email: 'paul.barasa@goldendreamers.com',
      image: '/images/static/IMG-20260406-WA0488.jpg',
      color: '#D4AF37'
    },
    {
      name: 'MR. AUSTINE ORINA',
      title: 'Senior Support Manager',
      phone: '+254 746 332 642',
      phoneShort: '0746 332 642',
      email: 'austine.orina@goldendreamers.com',
      image: '/images/static/IMG-20260406-WA0410.jpg',
      color: '#4A90E2'
    },
    {
      name: 'MOSES OKOTH',
      title: 'Business Development',
      phone: '+254 723 830049',
      phoneShort: '0723 830049',
      email: 'moses.okoth@goldendreamers.com',
      image: '/images/static/W4.jpeg',
      color: '#50C878'
    },
    {
      name: 'SIR OKOTH',
      title: 'events coordinator',
      phone: '+254 115 632589',
      phoneShort: '0115 632589',
      email: 'sir.okoth@goldendreamers.com',
      image: '/images/static/IMG-20260406-WA0924.jpg',
      color: '#9B59B6'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleCallNow = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = (phone) => {
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa, #fff)', minHeight: '100vh', marginTop: '76px' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark px-4 py-2 rounded-pill mb-3">
            <i className="fas fa-headset me-2"></i> 24/7 SUPPORT
          </span>
          <h2 className="display-4 fw-bold mb-3">
            Contact <span className="text-warning">Support</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="text-muted fs-5">Our dedicated team is here to assist you</p>
        </div>

        {showAlert && (
          <Alert variant="success" className="text-center rounded-pill" onClose={() => setShowAlert(false)} dismissible>
            <i className="fas fa-check-circle me-2"></i>
            Thank you! We will get back to you within 24 hours.
          </Alert>
        )}

        <Row>
          <Col lg={7} className="mb-4">
            <h3 className="fw-bold mb-4">
              <i className="fas fa-users text-warning me-2"></i>
              Leadership Team
            </h3>
            <Row>
              {supportContacts.map((contact, idx) => (
                <Col md={6} key={idx} className="mb-4">
                  <Card className="h-100 border-0 rounded-4 shadow-sm card-hover">
                    <div style={{ height: '4px', background: contact.color }}></div>
                    <Card.Body className="p-4 text-center">
                      {/* Profile Image */}
                      <div className="mb-3">
                        <img 
                          src={contact.image}
                          alt={contact.name}
                          className="rounded-circle"
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            border: `3px solid ${contact.color}`,
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/100x100/D4AF37/white?text=' + contact.name.charAt(0);
                          }}
                        />
                      </div>
                      <h5 className="fw-bold mb-1">{contact.name}</h5>
                      <p className="small text-muted mb-3">{contact.title}</p>
                      <div className="mb-3">
                        <p className="mb-1">
                          <i className="fas fa-phone-alt text-warning me-2"></i>
                          <strong>{contact.phoneShort}</strong>
                        </p>
                        <p className="mb-0">
                          <i className="fas fa-envelope text-warning me-2"></i>
                          <small>{contact.email}</small>
                        </p>
                      </div>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-warning" 
                          size="sm" 
                          className="rounded-pill flex-grow-1" 
                          onClick={() => handleCallNow(contact.phone)}
                        >
                          <i className="fas fa-phone-alt me-1"></i> Call
                        </Button>
                        <Button 
                          variant="success" 
                          size="sm" 
                          className="rounded-pill flex-grow-1" 
                          style={{ background: '#25D366', border: 'none' }} 
                          onClick={() => handleWhatsApp(contact.phone)}
                        >
                          <i className="fab fa-whatsapp me-1"></i> WhatsApp
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={5} className="mb-4">
            <Card className="border-0 rounded-4 shadow-sm h-100">
              <Card.Body className="p-4">
                <h3 className="fw-bold mb-4">
                  <i className="fas fa-paper-plane text-warning me-2"></i>
                  Send Message
                </h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name *</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="rounded-pill" 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="rounded-pill" 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className="rounded-pill" 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange} 
                      required 
                      className="rounded-pill" 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      rows={4} 
                      required 
                    />
                  </Form.Group>
                  <Button 
                    type="submit" 
                    className="w-100 py-2 rounded-pill fw-bold" 
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #B8860B)', border: 'none' }}
                  >
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick Contact Bar */}
        <div className="text-center mt-4 p-4 bg-dark rounded-4 text-white" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
          <Row className="align-items-center">
            <Col md={4} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <div className="bg-warning rounded-circle p-2">
                  <i className="fas fa-phone-alt text-dark"></i>
                </div>
                <div>
                  <small className="text-muted d-block">Emergency Support</small>
                  <strong className="fs-5">+254 708 956451</strong>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <div className="bg-warning rounded-circle p-2">
                  <i className="fas fa-envelope text-dark"></i>
                </div>
                <div>
                  <small className="text-muted d-block">Email Us</small>
                  <strong className="fs-6">support@goldendreamers.com</strong>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <div className="bg-warning rounded-circle p-2">
                  <i className="fab fa-whatsapp text-dark"></i>
                </div>
                <div>
                  <small className="text-muted d-block">WhatsApp Support</small>
                  <strong className="fs-5">+254 708 956451</strong>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Office Hours */}
        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            <i className="fas fa-clock me-2 text-warning"></i>
            <strong>Office Hours:</strong> Monday - Friday: 8:00 AM - 8:00 PM | Saturday: 9:00 AM - 5:00 PM | Sunday: Closed
          </p>
        </div>
      </Container>

      <style jsx>{`
        .gold-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #D4AF37, #B8860B);
          margin: 20px auto;
          border-radius: 2px;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
        @media (max-width: 768px) {
          .card-hover {
            margin-bottom: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSupport;