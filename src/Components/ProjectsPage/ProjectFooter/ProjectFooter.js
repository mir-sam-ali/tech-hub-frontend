import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectFooter.css';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

const ProjectFooter = () => {
  return (
    <div className="ProjectFooter">
      <div className="container-fluid wrapper">
        <div className="row top">
          <div className="quickLinks col-md-2">
            <p>Quick Links</p>
          </div>
          <div className="cont col-md-10 col-12">
            <div className="all ">
              <Link to="/">Home</Link>
              <Link to="/Events">Events</Link>
            </div>
            <div className="all ">
              <Link to="/TechnicalCommittee">TAC 2020</Link>
              <Link to="/Events/Activities">Activities</Link>
            </div>
            <div className="all ">
              <Link to="/Events/Workshops">Workshops</Link>
              <Link to="/Events/Talks">Talks</Link>
            </div>

            <div className="all ">
              <Link to="/Projects">Projects</Link>
              <Link to="/Blogs">Blogs</Link>
            </div>
            <div className="all ">
              <Link to="/Challenges/all">Challenges</Link>
              <Link to="/Events/Competitions">Competitions</Link>
            </div>

            <div className="all">
              <Link to="/WebTeam">Web Team</Link>
              <Link
                to="/Events/CalendarEvents"
                className="CalendarLink-ProjectFooter"
              >
                Calendar
              </Link>
            </div>
            <div className="all">
              <a
                href="https://forms.gle/ZGPcJSZb6qxiS9adA"
                target="_blank"
                rel="noreferrer"
              >
                Report Error
              </a>
            </div>
          </div>
          {/* <div className="cont col-md-10 col-12 mobileProjectFooter">
            <div className="all ">
              <Link to="/">Home</Link>
              <Link to="/Events">Events</Link>
              <Link to="/TechnicalCommittee">TAC 2020</Link>
              <Link to="/Events/Activities">Activities</Link>
              <Link to="/Events/Workshops">Workshops</Link>
              <Link to="/Events/Talks">Talks</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Events/CalendarEvents">Calendar</Link>
              <Link to="/Challenges/all">Challenges</Link>
              <Link to="/Events/Competitions">Competitions</Link>
              <Link to="/Blogs">Blogs</Link>
              <Link to="WebTeam">Web Team</Link>
              <Link to="/">Support</Link>
            </div>
          </div> */}
        </div>
        <br />
        <div className="row bottom">
          <div className="col-sm-2 lower-one bt">
            <div className="row connect">CONNECT WITH US</div>
            <div className=" row icons">
              <div className="icn youtube">
                <FaYoutube />
              </div>
              <div className="icn">
                <FaInstagram />
              </div>
              <div className="icn">
                <FaFacebook />
              </div>
            </div>
          </div>
          <div className="col-sm-6 lower-two bt">
            MADE WITH{' '}
            <p className="heart">
              <AiFillHeart style={{ position: 'relative', top: '0.35vw' }} />
            </p>{' '}
            BY <strong> WEB TEAM </strong> TAC 2020-21
            <p className="techhub">
              <strong>TECH HUB IIT TIRUPATI</strong>
            </p>
          </div>
          <div className="col-sm-4  lower-three bt">
            <p>?? 2020 IDEA SQUARE. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFooter;
