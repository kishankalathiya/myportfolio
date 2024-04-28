import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { Envelope } from "react-bootstrap-icons";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Testimonials from "../Testimonials/Testimonials";
import "../Services/Services.css";

export default function Portfolio() {
  const [feedbackList, setFeedbackList] = useState([{}]);
  const [originalFeedbackList, setOriginalFeedbackList] = useState([{}]);
  const [comments, setComments] = useState([{}]);
  const [filterComments, setFilterComments] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response1 = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData1 = await response1.json();
      setOriginalFeedbackList(jsonData1);
      setFeedbackList(jsonData1);
      console.log(originalFeedbackList);

      const response = await fetch("https://dummyjson.com/comments?limit=10");
      const jsonData = await response.json();
      console.log(jsonData);
      setComments(jsonData.comments);
      setFilterComments(jsonData.comments);
      setLoading(false); // Set loading to false after successful fetch
    } catch (error) {
      setLoading(false); // Set loading to false on error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loaderContainer">
        <h1 className="loaderText">Loading...</h1>
      </div>
    );
  }

  const filterData = () => {
    const filValue = document.getElementById("selectedCity").value;
    if (filValue !== "0") {
      const data = originalFeedbackList.filter(
        (data) => data.name === filValue
      );
      setFeedbackList(data);
    } else {
      setFeedbackList(originalFeedbackList);
    }
  };

  const filterCommentsData = () => {
    const filValue = document.getElementById("searchValue").value;
    if (filValue) {
      const data = comments.filter((data) => data.user.username.includes(filValue));
      setFilterComments(data);
    } else {
      setFilterComments(comments);
    }
  };

  return (
    <div className="portfolioContainer">
      <Skills />
      <br />
      <Experience />
      <br />
      <Services />
      <br />
      <Projects />
      <Testimonials />
      <div className="portfolioContainer2">
        <div>
          <select className="dropdown" id="selectedCity" onChange={filterData}>
            <option className="dropOpt" value={0}>
              -- Select Name --
            </option>
            {originalFeedbackList.map((data) => {
              return <option className="dropOpt">{data.name}</option>;
            })}
          </select>

          <div className="row row-cols-1 row-cols-md-3 g-4 p-4 mt-3">
            {feedbackList.map((res) => {
              return (
                <>
                  <div className="col">
                    <div className="card feedbackContainer">
                      <div className="card-body">
                        <h2 className="card-title">{res.name}</h2>
                        <p className="card-text">
                          <p>
                            <h6>
                              <Envelope /> {res.email}
                            </h6>
                          </p>
                          <h5>
                            Working with Kishan Kalathiya was an absolute
                            pleasure. Their expertise in was evident from the
                            start, and they consistently delivered high-quality
                            results on time and within budget.I would highly
                            recommend Kishan Kalathiya to anyone in need of a
                            talented and reliable developer
                          </h5>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <br />
          <br />
          <h2 className="text-center">
            Some appreciation from social media...
          </h2>
          <br />
          <div className="searchComment">
            <input
              type="text"
              className="unameSer"
              id="searchValue"
              onChange={() => filterCommentsData()}
              placeholder="Enter username"
            />
          </div>
          <br />

          <div className="container">
            <center>
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {filterComments.map((res) => {
                  return (
                    <>
                      <div className="col">
                        <div className="comementsDiv">
                          <h5>{res.body}</h5>
                          <h6>username : {res.user.username}</h6>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </center>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
