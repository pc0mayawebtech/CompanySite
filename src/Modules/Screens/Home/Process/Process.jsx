import React from 'react';
import './Process.css';

const Process = () => {
  const processItems = [
    { number: '1', title: 'Analysis & Strategy', subtitle: 'We analyze your needs and develop a strategy.' },
    { number: '2', title: 'Offer & Planning', subtitle: 'We offer solutions and plan the project timeline.' },
    { number: '3', title: 'Design & Development', subtitle: 'We create designs and develop the solution.' },
    { number: '4', title: 'Testing & Launch', subtitle: 'We test rigorously and launch the project.' },
  ];

  return (
    <div className="our-process-page">
      <div className="process-header">
        <h1 className="process-title mainTitle">Our Process</h1>
        <p className="process-description">We follow a structured process to ensure the highest quality outcomes for our clients.</p>
      </div>
      <ul className="process-list">
        {processItems.map((item, index) => (
          <li className="process-list-item" key={index}>
            <span className="process-number">{item.number}</span>
            <h2 className="process-title">{item.title}</h2>
            <p className="process-subtitle">{item.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Process;
