/* eslint-disable no-undef */
/* esling-disable  */
import React from 'react';
import { Helmet } from 'react-helmet';
import '../layout/styles/Homepage.css';
import Navbar from './Navbar';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Kirilov's Homepage</title>
      </Helmet>
      <div className="homepageBody">
        <Navbar />
        <div className="container mt-3">
          <div className="homeContainer mx-auto">
            <div className="something">
              <h2 className="d-inline-flex p-2">Who am I?</h2>
              <p className="d-block p-2">
                Hello guys! My name is Hristo Kirilov and I'm 25 years young man from Ruse, Bulgaria.
                I am self-taught and passioned about programming and I'm looking for an internship into
                web development.
                <br />
                <br />
                I have knowledge in HTML, CSS, Bootstrap, JavaScript, the basics of
                React, some Firebase stuff and I'll try to combine all this in my portfolio. I also know how to work
                pretty well with Photoshop.
            </p>
            </div>

            <div className="my-4 text-right">
              <h2 className="d-inline-flex p-2">English Skills</h2>
              <p className="d-block p-2">
                I have been in USA (Work and Travel) - working in a golf club and in a restaurant. I have been in UK driving a taxi.
                With this in hand, I think I have really good speaking and writing skills that will be helpful with this job.
            </p>
            </div>

            <div className="mt-4 mb-4 text-center">
              <h2 className="d-inline-flex p-2">Find me here</h2>
              <p className="d-block p-2 last">
                <span className="float-left">Email:</span>
                hristokirilov93@gmail.com
                <br />
                <span className="float-left">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/hristo-kirilov-671453a8" // eslint-disable-next-line react/jsx-no-target-blank 
                  target="_blank">Hristo Kirilov</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;