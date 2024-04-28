import React from "react";
import "./Projects.css";
import Project1 from "../../Assets/Images/Project1.png";
import Project2 from "../../Assets/Images/Project2.png";
import Project3 from "../../Assets/Images/Project3.png";
import { Git } from "react-bootstrap-icons";

export default function Projects() {
  return (
    <div className="projectsContainer">
      <br/>
      <h1>Projects</h1>
      <h3>Here is some work done by me!!!</h3>
      <br />
      <div className="projectCardsContainer">
        <div class="row row-cols-1 row-cols-md-3 g-4 p-4">
          <div class="col">
          <a href="https://softwareconnect.com/roundups/best-employee-management-software/">
            <div class="card h-100 cardCss">
              <img src={Project1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Employee Management System</h2>
                <br />
                <p class="card-text">
                  Introducing my Employee Management System, a robust solution
                  designed to streamline HR operations and enhance workforce
                  management. With intuitive user interfaces and powerful
                  backend functionality, this system empowers organizations to
                  efficiently handle employee onboarding, attendance tracking,
                  performance evaluation, and more. Built with modern
                  technologies and scalability in mind, it's the perfect tool to
                  drive organizational efficiency and employee satisfaction.
                </p>
              </div>
              <div class="card-footer cardCss">
                <Git />
              </div>
            </div>
            </a>
          </div>
          <div class="col">
          <a href="https://www.tomsguide.com/round-up/best-weather-apps">
            <div class="card h-100 cardCss">
              <img src={Project2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Weather Application</h2>
                <br />
                <p class="card-text">
                  Here is my Weather App, your go-to companion for up-to-date
                  weather information anytime, anywhere. With sleek design and
                  reliable data sources, this app provides accurate forecasts,
                  current conditions, and detailed weather reports for locations
                  worldwide. Whether you're planning your day or preparing for a
                  trip, stay informed and make informed decisions with ease
                  using my Weather App. Built with user experience in mind, it's
                  your reliable partner for all things weather-related.
                </p>
              </div>
              <div class="card-footer cardCss">
                <Git />
              </div>
            </div>
            </a>
          </div>
          <div class="col">
          <a href="https://www.meistertask.com/?utm_source=Bing&utm_medium=Paid_Search&utm_campaign=US_en_PNPQ_BI_SB_MT&utm_term=to-do%20list%20apps&utm_campaign=DACH_en_B2B_Banking_S&utm_source=bing&utm_medium=ppc&hsa_acc=8361758703&hsa_cam=15373597869&hsa_grp=1159985851604597&hsa_ad=&hsa_src=o&hsa_tgt=kwd-72499781961755:loc-90&hsa_kw=to-do%20list%20apps&hsa_mt=e&hsa_net=adwords&hsa_ver=3&msclkid=cf018d86558d1a2b6f6febabe5721348&utm_content=To%20Do%20List%20App">
            <div class="card h-100 cardCss">
              <img src={Project3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">To-Do List Application</h2>
                <br />
                <p class="card-text">
                  Introducing my To-Do List Application, the ultimate
                  productivity tool to help you stay organized and on track with
                  your tasks. With a clean and intuitive interface, this app
                  makes it easy to create, manage, and prioritize your to-do
                  lists effortlessly. Whether you're tackling daily chores,
                  planning projects, or setting goals, my To-Do List Application
                  keeps you focused and productive every step of the way.
                  Designed for simplicity and efficiency, it's your personal
                  assistant for conquering your daily agenda.
                </p>
              </div>
              <div class="card-footer cardCss">
                <Git />
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
