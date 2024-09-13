import React from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Gen Z EduNet</div>
        <div className="account-menu">My account ▼</div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1>Hi, Student</h1>
        <div className="subjects">
          <h2>Subjects</h2>
          <ul>
            <li>Computer Science</li>
            <li>ICT</li>
            <li>IT</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h4>Use cases</h4>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Help articles</li>
            <li>Guides</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
