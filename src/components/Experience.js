import React from "react";
import styles from "../moduleCSS/Experience.module.css";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { ReactComponent as ByjusLogo } from "../media/byjus_logo.svg";
import { ReactComponent as FreechargeLogo } from "../media/fc_logo.svg";
import BepLogo from "../media/BEP.png";
import openLink from "../helpers/openLink";
import { Reveal } from "./Reveal";

const experiences = [
  {
    date: "Sept, 2024 - Present",
    company: "Freecharge by Axis Bank",
    url: "hhttps://www.freecharge.in/",
    iconType: "svg",
    icon: FreechargeLogo,
    description: [
      "<b>HRMS Portal:</b> Designed and developed a robust, scalable HRMS (Human Resource Management System) application for Axis Bank from the ground up, leveraging Next.js for the frontend and Node.js with MySQL on the backend, following microservice architecture principles to ensure modularity and maintainability; implemented core workflows including employee onboarding, with seamless integration of authentication, maker-checker, role-based access control, and service orchestration.",
      "<b>Encryption/Decryption Service:</b> Built a robust, scalable encryption-decryption service using AWS KMS with key rotation via envelope encryption, avoiding DB updates on key change; implemented Sequelize hooks for real-time data encryption/decryption and used AsyncLocalStorage to securely solate keys per request, ensuring thread safety and eliminating context drilling.",
    ],
  },
  {
    date: "July, 2023 - Sept, 2024",
    company: "Byjus",
    url: "https://byjus.com/",
    iconType: "svg",
    icon: ByjusLogo,
    description: [
      "<b>Engineered Fusion Proxy:</b> Developed a Node.js and Express.js service in a 2-person team, consolidating requests across Aakash, BYJU'S, and Tutor Plus,transitioning vertical infrastructure to a horizontal model to enhance efficiency.",
      "Coordinated concurrent requests to services, resulting in a reduction of overall response times from an average of 5 seconds to 2 seconds.",
      "Implemented io Redis to streamline multiple requests in a single connection, resulting in a 50% reduction in data retrieval response times from 3 seconds to 1.5 seconds.",
      "<b>Activation Portal:</b> Developed and implemented a kit activation portal using ReactJS for the BYJU'S learning app in the US, facilitating seamless activation through unique activation codes, contributing to an app with over 10 million downloads.",
      "<b>BYJU'S Early Learn:</b> Provided pivotal support for the backend infrastructure of BYJU'S Early Learn:, leveraging the robust Ruby on Rails framework.",
      "Collaborated closely with the product team, implementing changes and enhancements to align the backend with the product vision.",
      "<b>Database Migration:</b> Executed a pivotal database migration initiative, resulting in substantial monthly savings of $500 for both K3India and K3 Global teams.",
    ],
  },
  {
    date: "Jan, 2023 - July, 2023",
    company: "Byjus Exam Prep",
    url: "https://byjusexamprep.com/",
    iconType: "img",
    icon: BepLogo,
    description: [
      "<b>Funnel Optimization and CAT college predictor:</b> Optimized funnels and applied new user engagement strategies, resulting in a substantial 15% increase in lead generation.",
      "Built a CAT college predictor page, empowering users to accurately assess their eligibility for colleges based on academic performance, leading to a 25% boost in informed decision-making and user interaction.",
      "<b>Revamped Workshop Page:</b> Revamped Workshop Page for diverse states based on user login statuses and actions, achieving a notable 10% post-registration drop-off reduction with engaging hook implementation.",
      "<b>CSIR NET Eligibility Calculator:</b> Developed and integrated an eligibility calculator for lectureship and JRF, leading to a notable 25% increase in website traffic and an impressive 30% rise in signups.",
      "<b>Unbounce Integration and Lead Generation:</b> Coded and deployed static pages on Unbounce, seamlessly integrating them into the website flow through JavaScript event dispatchers/listeners to optimize lead generation efforts.",
      "<b>SEO Enhancement and Web Vitals Optimization:</b> Enhanced SEO and optimized web vitals, focusing on improving CLS and other metrics to enhance website accessibility and performance, contributing to an overall improved user experience.",
    ],
  },
];

export default function Experience() {
  const handleRedirect = (url) => {
    openLink(url);
  };

  const renderIcon = (iconType, IconComponent, url) => {
    if (iconType === "svg") {
      return (
        <IconComponent
          className={styles.svgLogo}
          onClick={() => handleRedirect(url)}
        />
      );
    } else {
      return (
        <img
          src={IconComponent}
          alt="Company Logo"
          className={styles.imgLogo}
          onClick={() => handleRedirect(url)}
        />
      );
    }
  };

  return (
    <div className={styles.mainContainer} id="experience">
      <h1 className={styles.heading}>Experience</h1>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`${styles.content} ${
            index % 2 === 0 ? styles.content1 : styles.content2
          }`}
        >
          <section
            className={`${styles.exp} ${
              index % 2 === 0 ? styles.exp1 : styles.exp2
            }`}
          >
            <div className={styles.expContainer}>
              <div
                className={`${styles.circle} ${
                  index % 2 === 0 ? "" : styles.circle2
                }`}
                onClick={() => handleRedirect(experience.url)}
              >
                <BsFillSuitcaseLgFill />
              </div>
              <span className={index % 2 === 0 ? styles.date : styles.date2}>
                {experience.date}
                <hr />
              </span>
              <Reveal isSlider={true} width="fit-content">
                {renderIcon(
                  experience.iconType,
                  experience.icon,
                  experience.url
                )}
              </Reveal>
              <Reveal isSlider={true} width="fit-content">
                <h1 className={styles.designation}>Software Engineer</h1>
              </Reveal>
              <ul>
                {experience.description.map((desc, idx) => (
                  <Reveal key={idx} isSlider={true} width="fit-content">
                    <li dangerouslySetInnerHTML={{ __html: `${desc}` }} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
