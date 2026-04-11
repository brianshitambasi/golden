import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

const HomeComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      id: 1,
      title: "BONAN VIVON PROJECT",
      subtitle: "Revolutionary Wealth Creation System",
      description: "Join the most innovative network marketing opportunity that transforms lives across Africa and beyond.",
      icon: "fas fa-gem",
      ctaText: "Discover More"
    },
    {
      id: 2,
      title: "BUILD LEADERS THAT LAST",
      subtitle: "CEO Paul Barasa's Vision",
      description: "Empowering individuals to become successful entrepreneurs through our proven system since 2006.",
      icon: "fas fa-crown",
      ctaText: "Join Leadership"
    },
    {
      id: 3,
      title: "GLOBAL EXPANSION",
      subtitle: "60+ Countries Worldwide",
      description: "Be part of a growing family across Philippines, UAE, Kenya, Nigeria, Ghana, and many more nations.",
      icon: "fas fa-globe-africa",
      ctaText: "View Global Reach"
    },
    {
      id: 4,
      title: "UNLIMITED EARNING POTENTIAL",
      subtitle: "Matching Bonus Up to Infinity",
      description: "Earn KES 4,800 per pair with our binary compensation plan. The more you grow, the more you earn!",
      icon: "fas fa-chart-line",
      ctaText: "View Plan"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const videoBackgroundUrl = "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4";

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="position-relative min-vh-100 d-flex align-items-center overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
          <video autoPlay loop muted playsInline className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover">
            <source src={videoBackgroundUrl} type="video/mp4" />
          </video>
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-yellow-900/30 to-transparent z-10"></div>
        </div>

        <Container className="position-relative z-20 py-5">
          <Row className="align-items-center min-vh-100">
            <Col lg={7} className="text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-pill mb-4 border border-yellow-400/30">
                <span className="position-relative d-flex h-3 w-3">
                  <span className="animate-ping position-absolute d-inline-flex h-100 w-100 rounded-circle bg-yellow-400 opacity-75"></span>
                  <span className="position-relative d-inline-flex rounded-circle h-3 w-3 bg-yellow-500"></span>
                </span>
                <span className="text-yellow-300 small fw-semibold tracking-wide">BONAN VIVON PROJECT • LIVE NOW</span>
              </div>
              
              <h1 className="display-1 fw-bold text-white mb-3">
                GOLDEN 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 d-block d-md-inline-block ms-md-3">DREAMERS</span>
              </h1>
              
              <p className="fs-2 text-white-50 mb-2 fw-semibold">Empowering Dreams, Building Legacies</p>
              <div className="h-1 w-25 bg-gradient-to-r from-yellow-400 to-amber-500 my-4 rounded-pill"></div>
              <p className="fs-4 text-white-50 mb-4">
                Join the <strong className="text-warning">BONAN VIVON PROJECT</strong> — a revolutionary network marketing system that transforms ordinary individuals into extraordinary leaders.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button variant="warning" size="lg" className="px-4 py-3 fw-bold rounded-pill shadow">
                  <i className="fas fa-rocket me-2"></i> Start Your Journey
                </Button>
                <Button variant="outline-light" size="lg" className="px-4 py-3 fw-bold rounded-pill">
                  <i className="fas fa-play-circle me-2"></i> Watch BONAN VIVON Story
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="position-absolute bottom-0 start-50 translate-middle-x z-20 animate-bounce mb-4">
          <div className="w-8 h-12 border-2 border-warning rounded-pill d-flex justify-content-center">
            <div className="w-1-5 h-3 bg-warning rounded-pill mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <div className="text-center mb-5">
            <span className="text-warning fw-semibold small text-uppercase bg-warning/10 px-4 py-2 rounded-pill d-inline-block mb-3">
              <i className="fas fa-star me-2"></i> THE BONAN VIVON EXPERIENCE
            </span>
            <h2 className="display-4 fw-bold">
              Discover Your <span className="text-warning">Path to Success</span>
            </h2>
          </div>
          
          <Carousel 
            activeIndex={currentSlide}
            onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
            interval={5000}
            indicators={true}
            controls={true}
            pause="hover"
          >
            {carouselSlides.map((slide) => (
              <Carousel.Item key={slide.id}>
                <div className="p-5 text-center" style={{ minHeight: '400px' }}>
                  <i className={`${slide.icon} display-1 text-warning mb-4`}></i>
                  <h3 className="display-5 mb-3">{slide.title}</h3>
                  <p className="lead text-warning mb-3">{slide.subtitle}</p>
                  <p className="fs-5 text-white-50">{slide.description}</p>
                  <Button variant="outline-warning" className="mt-3 rounded-pill px-4">
                    {slide.ctaText} <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center g-4">
            <Col md={3}>
              <i className="fas fa-globe-africa display-4 text-warning mb-3"></i>
              <h3 className="display-4 fw-bold">60+</h3>
              <p className="text-muted">Countries Worldwide</p>
            </Col>
            <Col md={3}>
              <i className="fas fa-calendar-alt display-4 text-warning mb-3"></i>
              <h3 className="display-4 fw-bold">2006</h3>
              <p className="text-muted">Years of Excellence</p>
            </Col>
            <Col md={3}>
              <i className="fas fa-users display-4 text-warning mb-3"></i>
              <h3 className="display-4 fw-bold">1M+</h3>
              <p className="text-muted">Lives Impacted</p>
            </Col>
            <Col md={3}>
              <i className="fas fa-chart-line display-4 text-warning mb-3"></i>
              <h3 className="display-4 fw-bold">KES 137M+</h3>
              <p className="text-muted">Earning Potential</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeComponent;