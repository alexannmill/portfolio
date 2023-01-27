/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Styles/Skills.css";

export default function Home() {
  const backend = [
    "SQL",
    "Node.js",
    "Javascript",
    "Typescript",
    "Ruby",
    "Express",
  ];
  const frontend = [
    "Javascript",
    "Typescript",
    "React",
    "HTML",
    "CSS",
    "jQuery",
  ];

  const webDesign = [
    "Figma",
    "Canva",
    "Tailwaind",
    "Bootstrap",
    "ERDs",
    "Responsive",
  ];
  const strategies = ["Agile", "Git", "Testing", "Documentation"];

  const renderFrontend = frontend.map((skill) => {
    return (
      <div className="skill">
        <h3>{skill}</h3>
      </div>
    );
  });
  const renderWebDesign = webDesign.map((skill) => {
    return (
      <div className="skill">
        <h3>{skill}</h3>
      </div>
    );
  });
  const renderBackend = backend.map((skill) => {
    return (
      <div className="skill">
        <h3>{skill}</h3>
      </div>
    );
  });

  const renderStrategies = strategies.map((skill) => {
    return (
      <div className="skill">
        <h3>{skill}</h3>
      </div>
    );
  });

  return (
    <div className="skills">
      <h1 className="skill-set-title">
        <strong>SKILL SET</strong>
      </h1>
      <div className="skill-list">
        <div className="set">
          <div className="list">
            <h2>// Font-end : </h2>
            {renderFrontend}
          </div>
          <div className="list">
            <h2>// Back-end :</h2>
            {renderBackend}
          </div>
        </div>
        <div className="set">
          <div className="list">
            <h2>// Web Design :</h2>
            {renderWebDesign}
          </div>
          <div className="list">
            <h2>// Strategies : </h2>
            {renderStrategies}
          </div>
        </div>
      </div>
    </div>
  );
}
