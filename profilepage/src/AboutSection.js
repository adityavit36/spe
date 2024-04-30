import React from 'react';
import './AboutSection.css'; // Import your CSS file

const AboutMePage = () => {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h3 className="dark-color">About Dr. Aditya Sharma, Neurologist</h3>
              <p>
                Welcome to my page! I'm Dr. Aditya, a dedicated neurologist committed to revolutionizing healthcare through innovation and personalized patient care. With a passion for improving lives and a wealth of experience in the field of neurology, I strive to provide the highest standard of medical expertise and compassionate support to all my patients.
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
              <img src="https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151107212.jpg?t=st=1714481868~exp=1714485468~hmac=b130fc9e6e306c73bff2f8b45dc82d7679dbff7ba83435e26153a697ac88619f&w=826" title="" alt="" />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                <p className="m-0px font-w-600">Happy Patients</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                <p className="m-0px font-w-600">Medical Operations Completed</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="530" data-speed="850">530</h6>
                <p className="m-0px font-w-600">Patient Visits</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                <p className="m-0px font-w-600">Patient Attended</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMePage;

