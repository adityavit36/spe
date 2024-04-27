import React from 'react';
import './styles.css';

class output extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\n  .service__card {\n    background-color: #f0f0f0;\n    padding: 20px;\n    border-radius: 10px;\n    margin: 10px;\n    text-align: center;\n  }\n" }} />
        <link rel="stylesheet" href="styles.css" />
        <title>Web Design Mastery | Aarogyashala</title>
        <header>
          <nav className="section__container nav__container">
            <div className="nav__logo">Aarogya<span>Shala</span></div>
            <ul className="nav__links">
              <li className="link"><a href="#">Home</a></li>
              <li className="link"><a href="#">About Us</a></li>
              <li className="link"><a href="#">Services</a></li>
              <li className="link"><a href="#">Pages</a></li>
              <li className="link"><a href="#">Blog</a></li>
            </ul>
            <button className="btn">Contact Us</button>
          </nav>
          <div className="section__container header__container">
            <div className="header__content">
              <h1>Providing an Exceptional Patient Experience</h1>
              <p style={{fontSize: '20px'}}>
                Experience the future of healthcare with Arogyashala, where quality
                medical care meets the convenience of online consultations.
              </p>
              <p style={{fontSize: '20px'}}>
                Say goodbye to long wait times and travel hassles – now, you can
                connect with experienced doctors from the comfort of your own home.
                With Arogyashala, access expert medical advice, diagnoses, and
                treatment plans anytime, anywhere.
              </p>
              <button className="btn">See Services</button>
            </div>
            <div className="header__form">
              <form>
                <h4>Book Now</h4>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Phone No." />
                <button className="btn form__btn">Book Appointment</button>
              </form>
            </div>
          </div>
        </header>
        <h1 style={{paddingLeft: '25%'}}>Our Consultation Process</h1>
        <section style={{paddingTop: '1.5rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0}}>
          <img src="assets/Blank Diagram_3.jpeg" style={{width: '50%', height: 'auto'}} />
        </section>
        <section className="section__container service__container">
          <div className="service__header">
            <div className="service__header__content">
              <h2 className="section__header">Our Special service</h2>
              <p>
                Beyond simply providing medical care, our commitment lies in
                delivering unparalleled service tailored to your unique needs.
              </p>
            </div>
            <button className="service__btn">Ask A Service</button>
          </div>
          <div id="service-carousel" className="owl-carousel owl-theme service__grid">
            <div className="service__card">
              <span><i className="ri-microscope-line" /></span>
              <h4>Laboratory Test</h4>
              <p>Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing at our facility.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="service__card">
              <span><i className="ri-capsule-fill" /></span>
              <h4>Laboratory Test</h4>
              <p>Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing at our facility.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="service__card">
              <span><i className="ri-nurse-line" /></span>
              <h4>Laboratory Test</h4>
              <p>Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing at our facility.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="service__card">
              <span><i className="ri-mental-health-line" /></span>
              <h4>Health Check</h4>
              <p>Our thorough assessments and expert evaluations help you stay proactive about your health.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="service__card">
              <span><i className="ri-hospital-line" /></span>
              <h4>General Dentistry</h4>
              <p>Experience comprehensive oral care with Dentistry. Trust us to keep your smile healthy and bright.</p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </section>
        <section className="section__container about__container">
          <div className="about__content">
            <h2 className="section__header">About Us</h2>
            <p style={{fontSize: '18px'}}>
              Welcome to AarogyaShala, your one-stop destination for
              reliable and comprehensive health care website. We are committed
              to promoting wellness and providing valuable resources to empower you
              on your health journey.
            </p>
            <p style={{fontSize: '18px'}}>
              Arogyashala Healthcare offers holistic, patient-centered care with a
              focus on preventive medicine and traditional healing practices. Its
              reputation for quality service, cultural sensitivity, and community
              engagement make it a compelling choice for those seeking comprehensive
              and personalized healthcare solutions
            </p>
            <p style={{fontSize: '18px'}}>
              Discover practical health tips and lifestyle advice to optimize your
              physical and mental well-being. We believe that small changes can lead
              to significant improvements in your quality of life, and we're here to
              guide you on your path to a healthier and happier you.
            </p>
          </div>
          <div className="about__image">
            <img src="assets/about.jpg" alt="about" />
          </div>
        </section>
        <section className="section__container why__container">
          <div className="why__image">
            <img src="assets/choose-us.jpg" alt="why choose us" />
          </div>
          <div className="why__content">
            <h2 className="section__header">Why Choose Us</h2>
            <p style={{fontSize: '18px'}}>
              With a steadfast commitment to your well-being, our team of highly
              trained healthcare professionals ensures that you receive nothing
              short of exceptional patient experiences.
            </p>
            <div className="why__grid">
              <span><i className="ri-hand-heart-line" /></span>
              <div>
                <h4>Intensive Care</h4>
                <p>
                  Our Intensive Care Unit is equipped with advanced technology and
                  staffed by team of professionals
                </p>
              </div>
              <span><i className="ri-truck-line" /></span>
              <div>
                <h4>Free Ambulance Car</h4>
                <p>
                  A compassionate initiative to prioritize your health and
                  well-being without any financial burden.
                </p>
              </div>
              <span><i className="ri-hospital-line" /></span>
              <div>
                <h4>Medical and Surgical</h4>
                <p>
                  Our Medical and Surgical services offer advanced healthcare
                  solutions to address medical needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section__container doctors__container">
          <div className="doctors__header">
            <div className="doctors__header__content">
              <h2 className="section__header">Our Special Doctors</h2>
              <p>
                We take pride in our exceptional team of doctors, each a specialist
                in their respective fields.
              </p>
            </div>
            <div className="doctors__nav">
              <span><i className="ri-arrow-left-line" /></span>
              <span><i className="ri-arrow-right-line" /></span>
            </div>
          </div>
          <div className="doctors__grid">
            <div className="doctors__card">
              <div className="doctors__card__image">
                <img src="assets/doctor-1.jpg" alt="doctor" />
                <div className="doctors__socials">
                  <span><i className="ri-instagram-line" /></span>
                  <span><i className="ri-facebook-fill" /></span>
                  <span><i className="ri-heart-fill" /></span>
                  <span><i className="ri-twitter-fill" /></span>
                </div>
              </div>
              <h4>Dr. Emily Smith</h4>
              <p>Cardiologist</p>
            </div>
            <div className="doctors__card">
              <div className="doctors__card__image">
                <img src="assets/doctor-2.jpg" alt="doctor" />
                <div className="doctors__socials">
                  <span><i className="ri-instagram-line" /></span>
                  <span><i className="ri-facebook-fill" /></span>
                  <span><i className="ri-heart-fill" /></span>
                  <span><i className="ri-twitter-fill" /></span>
                </div>
              </div>
              <h4>Dr. James Anderson</h4>
              <p>Neurosurgeon</p>
            </div>
            <div className="doctors__card">
              <div className="doctors__card__image">
                <img src="assets/doctor-3.jpg" alt="doctor" />
                <div className="doctors__socials">
                  <span><i className="ri-instagram-line" /></span>
                  <span><i className="ri-facebook-fill" /></span>
                  <span><i className="ri-heart-fill" /></span>
                  <span><i className="ri-twitter-fill" /></span>
                </div>
              </div>
              <h4>Dr. Michael Lee</h4>
              <p>Dermatologist</p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="section__container footer__container">
            <div className="footer__col">
              <h3>Aarogya<span>Shala</span></h3>
              <p>
                We are honored to be a part of your healthcare journey and committed
                to delivering compassionate, personalized, and top-notch care every
                step of the way.
              </p>
              <p>
                Trust us with your health, and let us work together to achieve the
                best possible outcomes for you and your loved ones.
              </p>
            </div>
            <div className="footer__col">
              <h4>About Us</h4>
              <p>Home</p>
              <p>About Us</p>
              <p>Work With Us</p>
              <p>Our Blog</p>
              <p>Terms &amp; Conditions</p>
            </div>
            <div className="footer__col">
              <h4>Services</h4>
              <p>Search Terms</p>
              <p>Advance Search</p>
              <p>Privacy Policy</p>
              <p>Suppliers</p>
              <p>Our Stores</p>
            </div>
            <div className="footer__col">
              <h4>Contact Us</h4>
              <p>
                <i className="ri-map-pin-2-fill" /> 123, London Bridge Street, London
              </p>
              <p><i className="ri-mail-fill" /> support@care.com</p>
              <p><i className="ri-phone-fill" /> (+012) 3456 789</p>
            </div>
          </div>
          <div className="footer__bar">
            <div className="footer__bar__content">
              <p>Copyright © 2023 AarogyaShala. All rights reserved.</p>
              <div className="footer__socials">
                <span><i className="ri-instagram-line" /></span>
                <span><i className="ri-facebook-fill" /></span>
                <span><i className="ri-heart-fill" /></span>
                <span><i className="ri-twitter-fill" /></span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default output;