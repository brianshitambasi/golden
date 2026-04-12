import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

const HomeComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // All images from your static folder
  const staticImages = [
    '/images/static/IMG-20260317-WA0087.jpg',
    '/images/static/IMG-20260406-WA0251.jpg',
    '/images/static/IMG-20260406-WA0334.jpg',
    '/images/static/IMG-20260406-WA0374.jpg',
    '/images/static/IMG-20260406-WA0391(1).jpg',
    '/images/static/IMG-20260406-WA0410.jpg',
    '/images/static/IMG-20260406-WA0438.jpg',
    '/images/static/IMG-20260406-WA0488.jpg',
    '/images/static/IMG-20260406-WA0520.jpg',
    '/images/static/IMG-20260406-WA0561.jpg',
    '/images/static/IMG-20260406-WA0591.jpg',
    '/images/static/IMG-20260406-WA0606.jpg',
    '/images/static/IMG-20260406-WA0639.jpg',
    '/images/static/IMG-20260406-WA0697.jpg',
    '/images/static/IMG-20260406-WA0924.jpg',
    '/images/static/IMG-20260406-WA0981.jpg',
  ];

  // Hero Background Image - Using bonan.jpg
  // Make sure bonan.jpg is in your public/images/static/ folder
  const heroBackgroundImage = '/images/static/bonan.jpg';

  // Carousel slides with content
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

  // List of countries for display
  const countriesList = [
    "🇺🇸 USA", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia", "🇩🇪 Germany", "🇫🇷 France", "🇯🇵 Japan",
    "🇨🇳 China", "🇮🇳 India", "🇧🇷 Brazil", "🇿🇦 South Africa", "🇰🇪 Kenya", "🇳🇬 Nigeria",
    "🇪🇬 Egypt", "🇸🇦 Saudi Arabia", "🇦🇪 UAE", "🇸🇬 Singapore", "🇲🇾 Malaysia", "🇮🇩 Indonesia",
    "🇵🇭 Philippines", "🇻🇳 Vietnam", "🇹🇭 Thailand", "🇰🇷 South Korea", "🇲🇽 Mexico", "🇦🇷 Argentina"
  ];

  return (
    <>
      {/* Hero Section - Bonan.jpg Background */}
      <section id="home" className="position-relative min-vh-100 d-flex align-items-center overflow-hidden">
        {/* Static Image Background - bonan.jpg */}
        <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
          <img 
            src={heroBackgroundImage}
            alt="Bonan Vivon Project"
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ objectFit: 'cover' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop';
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)',
            zIndex: 10
          }}></div>
          {/* Golden gradient overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            background: 'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)',
            zIndex: 10
          }}></div>
        </div>

        {/* Content Over Image */}
        <Container className="position-relative z-20 py-5">
          <Row className="align-items-center min-vh-100">
            <Col lg={8} className="text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 bg-dark/50 backdrop-blur-sm px-4 py-2 rounded-pill mb-4 border border-warning/30 animate-fade-in">
                <span className="position-relative d-flex h-3 w-3">
                  <span className="animate-ping position-absolute d-inline-flex h-100 w-100 rounded-circle bg-warning opacity-75"></span>
                  <span className="position-relative d-inline-flex rounded-circle h-3 w-3 bg-warning"></span>
                </span>
                <span className="text-warning small fw-semibold tracking-wide">🌍 BONAN VIVON PROJECT • ALLIANCE IN MOTION GLOBAL</span>
              </div>
              
              <h1 className="display-1 fw-bold text-white mb-3 animate-slide-up">
                GOLDEN 
                <span className="text-warning d-block d-md-inline-block ms-md-3">DREAMERS</span>
              </h1>
              
              <p className="fs-2 text-white-50 mb-2 fw-semibold animate-slide-up">Empowering Dreams Across the Globe</p>
              <div className="h-1 w-25 bg-warning my-4 rounded-pill animate-slide-up"></div>
              <p className="fs-4 text-white-50 mb-4 animate-slide-up">
                Join <strong className="text-warning">Alliance In Motion's BONAN VIVON PROJECT</strong> — a revolutionary network marketing system that transforms ordinary individuals into extraordinary leaders across <strong className="text-warning">60+ countries worldwide</strong>.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start animate-slide-up">
                <Button 
                  variant="warning" 
                  size="lg" 
                  className="px-5 py-3 fw-bold rounded-pill shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                    border: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 10px 30px rgba(212,175,55,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <i className="fas fa-rocket me-2"></i> Start Your Journey
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="px-5 py-3 fw-bold rounded-pill"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <i className="fas fa-play-circle me-2"></i> Watch Bonan Vivon Story
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x z-20 animate-bounce mb-4">
          <div className="w-8 h-12 border-2 border-warning rounded-pill d-flex justify-content-center">
            <div className="w-1-5 h-3 bg-warning rounded-pill mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section with All Static Images */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #0f0f1a, #1a1a2e)' }}>
        <Container>
          <div className="text-center mb-5">
            <span className="text-warning fw-semibold small text-uppercase bg-warning/10 px-4 py-2 rounded-pill d-inline-block mb-3">
              <i className="fas fa-images me-2"></i> OUR GALLERY
            </span>
            <h2 className="display-4 fw-bold text-white">
              Success <span className="text-warning">Moments</span>
            </h2>
            <div className="gold-divider mx-auto mt-3"></div>
            <p className="text-white-50 mt-3">Capturing the journey of Golden Dreamers across Africa</p>
          </div>

          {/* Full Image Carousel */}
          <Carousel 
            interval={4000}
            indicators={true}
            controls={true}
            pause="hover"
            className="image-carousel"
            style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
          >
            {staticImages.map((image, index) => (
              <Carousel.Item key={index}>
                <div style={{ 
                  position: 'relative', 
                  height: '550px', 
                  width: '100%',
                  backgroundColor: '#000',
                  overflow: 'hidden'
                }}>
                  <img
                    className="d-block w-100 h-100"
                    src={image}
                    alt={`Golden Dreamers Event ${index + 1}`}
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#1a1a2e'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/1200x550/1a1a2e/D4AF37?text=Golden+Dreamers+Event';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                    padding: '60px 20px 20px',
                    textAlign: 'center'
                  }}>
                    <h3 className="text-white mb-1 fs-3">Golden Dreamers Event</h3>
                    <p className="text-warning mb-0">Celebrating Success & Leadership</p>
                  </div>
                </div>
                <Carousel.Caption className="d-none d-md-block">
                  <h5 className="text-warning">Golden Dreamers Family</h5>
                  <p className="text-white">Building leaders that last across the globe</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Thumbnail Gallery Grid */}
          <div className="mt-5">
            <h4 className="text-center text-white mb-4">Event Highlights</h4>
            <Row className="g-3">
              {staticImages.slice(0, 8).map((image, index) => (
                <Col xs={6} md={3} key={index}>
                  <div 
                    className="thumbnail-card"
                    style={{
                      borderRadius: '15px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      height: '180px',
                      backgroundColor: '#2a2a3e'
                    }}
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.style.position = 'fixed';
                      modal.style.top = '0';
                      modal.style.left = '0';
                      modal.style.width = '100%';
                      modal.style.height = '100%';
                      modal.style.backgroundColor = 'rgba(0,0,0,0.95)';
                      modal.style.zIndex = '9999';
                      modal.style.display = 'flex';
                      modal.style.alignItems = 'center';
                      modal.style.justifyContent = 'center';
                      modal.style.cursor = 'pointer';
                      modal.onclick = () => modal.remove();
                      const img = document.createElement('img');
                      img.src = image;
                      img.style.maxWidth = '90%';
                      img.style.maxHeight = '90%';
                      img.style.objectFit = 'contain';
                      img.style.borderRadius = '10px';
                      img.style.border = '3px solid #D4AF37';
                      modal.appendChild(img);
                      document.body.appendChild(modal);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(212,175,55,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* View All Button */}
          <div className="text-center mt-4">
            <Button 
              variant="outline-warning" 
              className="rounded-pill px-4 py-2"
              onClick={() => {
                const modal = document.createElement('div');
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0,0,0,0.95)';
                modal.style.zIndex = '9999';
                modal.style.overflowY = 'auto';
                modal.style.padding = '20px';
                modal.onclick = (e) => {
                  if (e.target === modal) modal.remove();
                };
                
                const galleryContainer = document.createElement('div');
                galleryContainer.style.maxWidth = '1200px';
                galleryContainer.style.margin = '0 auto';
                galleryContainer.style.display = 'grid';
                galleryContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
                galleryContainer.style.gap = '15px';
                
                staticImages.forEach(imgSrc => {
                  const imgDiv = document.createElement('div');
                  imgDiv.style.cursor = 'pointer';
                  imgDiv.style.borderRadius = '10px';
                  imgDiv.style.overflow = 'hidden';
                  imgDiv.style.transition = 'transform 0.3s ease';
                  imgDiv.onmouseenter = () => imgDiv.style.transform = 'scale(1.05)';
                  imgDiv.onmouseleave = () => imgDiv.style.transform = 'scale(1)';
                  
                  const img = document.createElement('img');
                  img.src = imgSrc;
                  img.style.width = '100%';
                  img.style.height = '200px';
                  img.style.objectFit = 'cover';
                  
                  imgDiv.appendChild(img);
                  galleryContainer.appendChild(imgDiv);
                });
                
                modal.appendChild(galleryContainer);
                document.body.appendChild(modal);
              }}
            >
              <i className="fas fa-images me-2"></i> View All {staticImages.length} Photos
            </Button>
          </div>
        </Container>
      </section>

      {/* Content Carousel Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
        <Container>
          <div className="text-center mb-5">
            <span className="text-warning fw-semibold small text-uppercase bg-warning/10 px-4 py-2 rounded-pill d-inline-block mb-3">
              <i className="fas fa-star me-2"></i> THE BONAN VIVON EXPERIENCE
            </span>
            <h2 className="display-4 fw-bold text-white">
              Discover Your <span className="text-warning">Path to Success</span>
            </h2>
            <div className="gold-divider mx-auto mt-3"></div>
          </div>
          
          <Carousel 
            activeIndex={currentSlide}
            onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
            interval={5000}
            indicators={true}
            controls={true}
            pause="hover"
            className="carousel-custom"
          >
            {carouselSlides.map((slide) => (
              <Carousel.Item key={slide.id}>
                <div className="p-5 text-center" style={{ minHeight: '400px' }}>
                  <div className="icon-circle mb-4 mx-auto">
                    <i className={`${slide.icon} display-1 text-warning`}></i>
                  </div>
                  <h3 className="display-5 mb-3 text-white">{slide.title}</h3>
                  <p className="lead text-warning mb-3">{slide.subtitle}</p>
                  <p className="fs-5 text-white-50">{slide.description}</p>
                  <Button 
                    variant="outline-warning" 
                    className="mt-3 rounded-pill px-4 py-2"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {slide.ctaText} <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa, #ffffff)' }}>
        <Container>
          <Row className="text-center g-4">
            <Col md={3}>
              <div className="stat-card p-4 rounded-4 shadow-sm">
                <i className="fas fa-globe-africa display-4 text-warning mb-3"></i>
                <h3 className="display-4 fw-bold text-dark">60+</h3>
                <p className="text-muted">Countries Worldwide</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card p-4 rounded-4 shadow-sm">
                <i className="fas fa-calendar-alt display-4 text-warning mb-3"></i>
                <h3 className="display-4 fw-bold text-dark">2006</h3>
                <p className="text-muted">Years of Excellence</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card p-4 rounded-4 shadow-sm">
                <i className="fas fa-users display-4 text-warning mb-3"></i>
                <h3 className="display-4 fw-bold text-dark">1M+</h3>
                <p className="text-muted">Lives Impacted</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card p-4 rounded-4 shadow-sm">
                <i className="fas fa-chart-line display-4 text-warning mb-3"></i>
                <h3 className="display-4 fw-bold text-dark">KES 137M+</h3>
                <p className="text-muted">Earning Potential</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Floating Countries Banner */}
      <div className="py-3" style={{ background: 'linear-gradient(90deg, #1a1a2e, #2a2a3e, #1a1a2e)', overflow: 'hidden' }}>
        <div className="d-flex animate-marquee" style={{ whiteSpace: 'nowrap' }}>
          {countriesList.map((country, index) => (
            <span key={index} className="mx-3 text-warning fw-semibold">
              {country} <i className="fas fa-globe ms-1 text-white-50"></i>
            </span>
          ))}
          {countriesList.map((country, index) => (
            <span key={`dup-${index}`} className="mx-3 text-warning fw-semibold">
              {country} <i className="fas fa-globe ms-1 text-white-50"></i>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .animate-slide-up { animation: slideUp 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-bounce { animation: bounce 2s infinite; }
        .animate-marquee { animation: marquee 20s linear infinite; display: inline-flex; }
        .animate-ping { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        
        .gold-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #D4AF37, #B8860B);
          border-radius: 2px;
          margin: 20px auto;
        }
        
        .stat-card {
          transition: all 0.3s ease;
          background: white;
        }
        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15) !important;
        }
        
        .icon-circle {
          width: 100px;
          height: 100px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .icon-circle:hover {
          transform: scale(1.1);
          background: rgba(212, 175, 55, 0.2);
        }
        
        .image-carousel .carousel-control-prev,
        .image-carousel .carousel-control-next {
          width: 45px;
          height: 45px;
          background: rgba(212, 175, 55, 0.5);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.7;
        }
        .image-carousel .carousel-control-prev:hover,
        .image-carousel .carousel-control-next:hover {
          background: rgba(212, 175, 55, 0.9);
          opacity: 1;
        }
        .image-carousel .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 5px;
        }
        .image-carousel .carousel-indicators button.active {
          background-color: #D4AF37;
        }
        
        .w-8 { width: 2rem; }
        .h-12 { height: 3rem; }
        .w-1-5 { width: 0.375rem; }
        .h-3 { height: 0.75rem; }
        .backdrop-blur-sm { backdrop-filter: blur(4px); }
        .tracking-wide { letter-spacing: 0.025em; }
        .thumbnail-card { transition: all 0.3s ease; }
        
        @media (max-width: 768px) {
          .image-carousel .carousel-item div { height: 350px !important; }
          .display-1 { font-size: 2.5rem; }
          .display-4 { font-size: 1.8rem; }
        }
      `}</style>
    </>
  );
};

export default HomeComponent;