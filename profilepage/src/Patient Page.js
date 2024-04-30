import React from 'react';
import './AboutSection.css'; // Import your CSS file

const Patient = () => {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h3 className="dark-color">About Deep</h3>
              <p>
              I believe in embracing the future of healthcare, and that's why I'm a proud member of Arogyashala. Here, I've discovered a seamless blend of quality medical care and the convenience of online consultations. Gone are the days of enduring long wait times and the hassle of traveling to appointments. Now, I can connect with experienced doctors right from the comfort of my own home.
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Birthday</label>
                    <p>4th April 1998</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>22 Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p>Canada</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>California, USA</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>info@domain.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>820-885-3321</p>
                  </div>
                  <div className="media">
                    <label>Skype</label>
                    <p>skype.0404</p>
                  </div>
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img src="https://img.freepik.com/free-photo/smiley-doctor-patient-chatting-medium-shot_23-2149351660.jpg?w=740&t=st=1714485597~exp=1714486197~hmac=418106bc07d945422ee5ef91b4b6ce695920d754dd80a3639a6b2581142bc8a7" title="" alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Patient;