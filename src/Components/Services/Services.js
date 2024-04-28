import React, { useState } from "react";
import "./Services.css";
import { Modal } from "react-bootstrap";

export default function Services() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedService, setSelectedService] = useState(0);

  const serviceDesc = [
    {
      title: "Web Design",
      desc: "I specialize in creating captivating websites that combine stunning design with seamless functionality to enhance your online presence. From responsive layouts to intuitive user interfaces, I craft bespoke solutions that engage visitors and drive results. With a focus on user-centered design principles, I collaborate closely with clients to bring their visions to life and exceed their expectations. Whether you're a startup looking to make a bold statement or an established brand seeking a digital refresh, I'm committed to delivering tailored web design solutions that elevate your brand and propel your business forward.",
    },
    {
      title: "Content Writing",
      desc: "I specialize in crafting engaging content that resonates with your audience and drives traffic to your website. From website copy to blog posts and social media content, I offer tailored writing services to meet your brand's needs and objectives. With a focus on quality and timeliness, I work closely with clients to develop content strategies that align with their goals and elevate their online presence. Whether you're looking to attract new customers or establish thought leadership, I'm here to help you achieve your content marketing goals with creativity and precision.",
    },
    {
      title: "Blog Posting",
      desc: "I specialize in crafting engaging blog posts that captivate your audience and drive traffic to your website. With a passion for storytelling and a deep understanding of SEO, I create content that resonates with your readers and boosts your online visibility. Whether you need informative articles, thought-provoking commentary, or compelling narratives, I offer tailored blog writing services to meet your brand's needs and objectives. From brainstorming topics to polishing final drafts, I work closely with clients to ensure each post aligns with their brand voice and marketing goals. With my expertise in content creation and strategy, I'm here to help you establish your blog as a valuable resource and authority in your industry.",
    },
  ];

  const displayDetails = (value) => {
    setSelectedService(value);
    setShowDetails(true);
  };

  return (
    <div>
      <div className="servicesContaier">
        <br />
        <h1>Services</h1>
        <h3>Here are some services I offer.</h3>
        <br />
        <div class="container text-center">
          <div class="row">
            <div class="col serviceDataDiv" onClick={() => displayDetails(0)}>
              <h2>Web Design</h2>
            </div>
            <div class="col serviceDataDiv" onClick={() => displayDetails(1)}>
              <h2>Content Writing</h2>
            </div>
            <div class="col serviceDataDiv" onClick={() => displayDetails(2)}>
              <h2>Blog Posting</h2>
            </div>
          </div>
        </div>
      </div>

      <Modal
        id="imageModal"
        show={showDetails}
        onHide={() => setShowDetails(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "rgba(170, 58, 255, 1)",
          }}
        >
          <div id="modalTitle"><h1>{serviceDesc[selectedService].title}</h1></div>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            color:"rgba(255, 255, 255, 0.5)"
          }}
        >
          <h4 id="modaDet">{serviceDesc[selectedService].desc}</h4>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "rgba(170, 58, 255, 1)",
          }}
        ></Modal.Footer>
      </Modal>
    </div>
  );
}
