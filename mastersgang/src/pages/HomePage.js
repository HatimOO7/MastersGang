import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the MastersGang</h1>
        <p>Your hub for managing classrooms and learning</p>
      </header>

      <nav className="navigation">
        <ul>
          <li>
            <Link to="/Profile" className="nav-link">Profile</Link>
          </li>
          <li>
            <Link to="/Classes" className="nav-link">Classrooms</Link>
          </li>
          
        </ul>
      </nav>

      <section className="cta">
        <h2>Get Started</h2>
        <p>Join or create classrooms to start collaborating and learning today.</p>
        
      </section>

      
    </div>
  );
};

export default HomePage;
