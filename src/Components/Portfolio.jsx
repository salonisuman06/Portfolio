/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pages-side.jpg";

const imageAltText = "desktop with pages and tablet";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "URL shortener project ",
    description:
      "Integrated the whole system into a web-hosted application and implemented the QR based link scanners using Python (Django) and JavaScript. Implemented user registration, link shortening, analytics, customization, security, dashboards, redirection, API, error handling, scalability, compliance, support, improvement, and monetization, relying on best practices",
    url: "https://drive.google.com/drive/folders/1ZcVUg3zvA0DcLH0xxcScLdSH4WzZVz3z?usp=drive_link",
  },
  {
    title: "GUI authentication system",
    description:
      "Implemented the Recognition based Authentication, authenticateing users by having them select a pre-selected picture from a collection of photos during registration and login. Enhanced security over commonly used text-based passwords, mitigating risks of dictionary attacks and keystroke recording while ensuring a user-friendly, CAPTCHA-free authentication experience using HTML , CSS and JavaScript",
    url: "https://github.com/salonisuman06/Graphical-User-Password-Authentication-System",
  },
  {
    title: "A fully convolutional neural network for speech enhancement with spectrogram",
    description:
      "Babble noise significantly hinders hearing aid performance in understanding speech. Our Redundant Convolutional Encoder Decoder (R-CED) model, using supervised learning, improves speech clarity, offering a compact solution for embedded devices, like hearing aids. Audio Signal Processing with Python Libraries leverages pydub, matplotlib, tensorflow, numpy, librosa, scipy, and IPython for tasks like denoising and reconstruction.",
    url: "https://github.com/salonisuman06/A-Fully-Convolutional-Neural-Network-for-Complex-Spectrogram-Processing-in-Speech-Enhancement",
  },
  {
    title: "Chatbot For Mental Health",
    description:
      "Empowered the chatbot with advanced Python-based Natural Language Processing for comprehensive mental health support. Leverage data-driven recommendations powered by Python libraries like scikit-learn and Linear Support Vector Machine (Linear SVC) algorithm to enhance the chatbot's advice for an evolving, more effective mental health support system helping. ",
    url: "https://github.com/salonisuman06/Chatbot-for-Mental-Health",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
