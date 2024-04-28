import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="ExperienceContainer">
      <br />
      <h1>Experience</h1>
      <div className="d-flex justify-content-center flex-column">
        <div className="ExperienceData">
          <h2>
            <b>Software Developer</b>
          </h2>
          <h2>[XYZ Tech Solutions, Surat, Gujarat]</h2>
          <h2>[June 2022 - Present]</h2>
          <br />
          <h3>
            <ul className="text-start mt-2">
              <li>
                Designed and developed frontend features using React.js,
                resulting in a 20% increase in user engagement.
              </li>
              <li>
                Collaborated with cross-functional teams to implement RESTful
                APIs and backend services using Node.js and Express.
              </li>
              <li>
                Conducted code reviews and provided mentorship to junior
                developers, improving code quality and team performance.
              </li>
            </ul>
          </h3>
        </div>
        
        <div className="ExperienceData">
          <h2>
            <b>Junior Software Developer (Internship)</b>
          </h2>
          <h2>[ABC Software Company, Surat, Gujarat]</h2>
          <h2>[January 2021 - June 2022]</h2>
          <br />
          <h3>
            <ul className="text-start mt-2">
              <li>
                Assisted in the development of a web-based inventory management
                system using Angular and ASP.NET Core.
              </li>
              <li>
                Participated in daily stand-up meetings and sprint planning
                sessions, gaining hands-on experience with Agile methodologies.
              </li>
              <li>
                Conducted unit testing and debugging to identify and resolve
                software defects.
              </li>
              <li>
                Collaborated with senior developers to optimize application
                performance and enhance user experience.
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </div>
  );
}
