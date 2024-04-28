import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skillsContaier">
      <br/>
      <h1>Skills</h1>
      <br/>
      <div class="container text-center">
        <div class="row">
          <div class="col skillsDataDiv">
            <h2>Programming Languages</h2>
            <ul>
              <li>
                <h3>JavaScript</h3>
              </li>
              <li>
                <h3>HTML5</h3>
              </li>
              <li>
                <h3>CSS3</h3>
              </li>
              <li>
                <h3>Python</h3>
              </li>
              <li>
                <h3>Java</h3>
              </li>
            </ul>
          </div>
          <div class="col skillsDataDiv">
            <h2>Frontend Development</h2>
            <ul>
              <li>
                <h3>React.js</h3>
              </li>
              <li>
                <h3>Angular</h3>
              </li>
              <li>
                <h3>Vue.js</h3>
              </li>
              <li>
                <h3>Bootstrap</h3>
              </li>
              <li>
                <h3>Sass</h3>
              </li>
            </ul>
          </div>
          <div class="col skillsDataDiv">
            <h2>Backend Development</h2>
            <ul>
              <li>
                <h3>Node.js</h3>
              </li>
              <li>
                <h3>Express.js</h3>
              </li>
              <li>
                <h3>Django</h3>
              </li>
              <li>
                <h3>ASP.NET Core</h3>
              </li>
              <li>
                <h3>ASP.NET MVC</h3>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <div class="container text-center">
          <div class="row">
            <div class="col skillsDataDiv">
              <h2>Database Technologies</h2>
              <ul>
                <li>
                  <h3>MongoDB</h3>
                </li>
                <li>
                  <h3>MySQL</h3>
                </li>
                <li>
                  <h3>PostgreSQL</h3>
                </li>
                <li>
                  <h3>Firebase</h3>
                </li>
              </ul>
            </div>
            <div class="col skillsDataDiv">
              <h2>Version Control</h2>
              
              <ul>
                <li><h3>Git</h3></li>
                <li><h3>GitHub</h3></li>
                <li><h3>GitLab</h3></li>
                <li><h3>Bitbucket</h3></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
