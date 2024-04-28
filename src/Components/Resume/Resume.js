import React from "react";
import "./Resume.css";
import { GeoAlt, Envelope, Telephone, Download } from "react-bootstrap-icons";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = () => {
  const content = document.getElementById("pdf-content");
  content.style.display = "block";

  html2canvas(content)
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("generated-pdf.pdf");
      content.style.display = "none";
    })
    .catch((error) => {
      console.error("Error generating PDF:", error);
    });
};

const ResumeContent = () => {
  return (
    <>
      <div className="container resumeContainer">
        <div className="row rowContainer">
          <div className="col-md-2 align-self-center"></div>
          <div className="col-md-8 align-self-center" id="resumePdf">
            <br />
            <div className="DevNameContainer">
              <h1>Kishan Kalathiya</h1>
              <h3>
                <b>[Software Developer]</b>
              </h3>
              <h3 className="text-center">
                Seasoned software developer with over 3 years of hands-on
                experience in full-stack web development. Specializing in
                frontend frameworks such as React.js and Angular, along with
                backend technologies including Node.js and Django.Skilled in
                Agile methodologies and collaborative team environments.
              </h3>
            </div>
          </div>
          <div className="col-md-2 align-self-center"></div>
        </div>

        <div className="row p-2 ">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            {/* Contact details starts */}
            <div className="contact resumeContent">
              <h2 className="ms-1">Contact Details</h2>
              <div className="ps-3 pt-1">
                <h5>
                  <GeoAlt />
                  Surat,Gujarat
                </h5>
                <h5>
                  <Envelope />
                  daxitsavaliya@gmail.com
                </h5>
                <h5>
                  <Telephone />
                  +91-9988776655
                </h5>
              </div>
            </div>
            {/* Contact details ends */}

            <br />
            {/* Skills starts */}
            <div className="aboutInfo resumeContent">
              <h2 className="ms-1">Skills</h2>
              <div className="ps-3 pt-1">
                <div id="languages">
                  <h5>Programming Languages </h5>
                  <h6>JavaScript, HTML5, CSS3, Python, Java</h6>
                </div>
                <br />
                <div id="frontend">
                  <h5>Frontend Development</h5>
                  <h6>React.js, Angular, Vue.js, Bootstrap, Sass</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar w-50"></div>
                  </div>
                </div>
                <br />

                <div id="backend">
                  <h5>Backend Development</h5>
                  <h6>Node.js, Express.js, Django, ASP.NET Core</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar w-100"></div>
                  </div>
                </div>
                <br />
                <div id="database">
                  <h5>Database Technologies</h5>
                  <h6>MongoDB, MySQL, PostgreSQL, Firebase</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar w-75"></div>
                  </div>
                </div>
                <br />
                <div id="versionControl">
                  <h5>Version Control</h5>
                  <h6> Git, GitHub, Bitbucket</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar w-75"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Skills ends */}

            <br />
            {/* Certification Starts */}
            <div className="education resumeContent">
              <h2>Certifications </h2>

              <div className="ps-3 pt-1">
                <h5>
                  <b>🏅Certified Full-Stack Web Developer</b>
                  <br />
                  [Online Course Provider]
                  <br />
                  [Completed: September 2021]
                  <br />
                  <br />
                  <b>🏅Certified ScrumMaster (CSM)</b>
                  <br />
                  [Scrum Alliance]
                  <br />
                  [Awarded: January 2020]
                  <br />
                </h5>
              </div>
            </div>
            {/* Certification ends */}
          </div>
          <div className="col-md-4">
            {/* Education Starts */}

            <div className="education resumeContent">
              <h2>Education</h2>

              <div className="ps-3 pt-1">
                <h5>
                  <b>Bachelor of Science in Computer Science</b>
                  <br />
                  [Gujarat University,Valsad,Gujarat]
                  <br />
                  [Graduated: May 2021]
                  <br />
                  <br />
                  <b>Certification in Full-Stack Web Development</b>
                  <br />
                  [Online Course Provider]
                  <br />
                  [Completed: September 2021]
                  <br />
                </h5>
              </div>
            </div>
            {/* Education ends */}
            <br />
            {/* Experience starts */}
            <div className="experience resumeContent">
              <h2>Experiance</h2>

              <div className="ps-3 pt-1">
                <h5>
                  <b>Software Developer</b>
                  <br />
                  [XYZ Tech Solutions, Surat, Gujarat]
                  <br />
                  [June 2022 - Present]
                  <br />
                  <ul className="text-start mt-2">
                    <li>
                      Designed and developed frontend features using React.js,
                      resulting in a 20% increase in user engagement.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to implement
                      RESTful APIs and backend services using Node.js and
                      Express.
                    </li>
                    <li>
                      Conducted code reviews and provided mentorship to junior
                      developers, improving code quality and team performance.
                    </li>
                  </ul>
                  <b>Junior Software Developer (Internship)</b>
                  <br />
                  [ABC Software Company, Surat, Gujarat]
                  <br />
                  [January 2021 - June 2022]
                  <br />
                  <ul className="text-start mt-2">
                    <li>
                      Assisted in the development of a web-based inventory
                      management system using Angular and ASP.NET Core.
                    </li>
                    <li>
                      Participated in daily stand-up meetings and sprint
                      planning sessions, gaining hands-on experience with Agile
                      methodologies.
                    </li>
                    <li>
                    Conducted unit testing and debugging to identify and resolve software defects.
                    </li>
                    <li>
                    Collaborated with senior developers to optimize application performance and enhance user experience.
                    </li>
                  </ul>
                </h5>
              </div>
            </div>
            {/* Experience ends */}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default function Resume() {
  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="w-25 downloadBtn" onClick={generatePDF}>
          Download Resume <Download />
        </button>
      </div>

      <div id="resume">
        <ResumeContent />
      </div>

      <div id="pdf-content" className="pdfContent">
        <ResumeContent />
      </div>
    </>
  );
}
