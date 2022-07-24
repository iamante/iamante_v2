import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import Work from "./components/Work/Work";
import { WorkData } from "./components/Work/WorkData";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const el = useRef();
  useEffect(() => {
    const q = gsap.utils.selector(el);
    gsap.from(q(".about-text, .about-img"), {
      duration: 2,
      y: "40",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".about-text, .about-img",
        start: "top 90%",
        end: "bottom 70%",
        toggleActions: "play none none complete",
      },
    });

    gsap.from(q(".skill-text, .card-container"), {
      duration: 2,
      y: "40",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".skill-text, .card-container",
        start: "top 90%",
        end: "bottom 70%",
        toggleActions: "play none none complete",
      },
    });

    gsap.from(q(".img-container, .text-container"), {
      duration: 2,
      y: "40",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".img-container, .text-container",
        start: "top 90%",
        end: "bottom 70%",
        toggleActions: "play none none complete",
      },
    });

    gsap.from(q(".form-container, .social-container"), {
      duration: 2,
      y: "40",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".form-container, .social-container",
        start: "top 90%",
        end: "bottom 70%",
        toggleActions: "play none none complete",
      },
    });
  }, []);

  return (
    <div className="App" ref={el}>
      <Header />
      <div className="sections">
        <Hero />
        <About />
        <Skill />
        {WorkData.map((data) => {
          return (
            <Work
              key={data.id}
              number={data.number}
              image={data.image}
              title={data.title}
              description={data.desicription}
              tech={data.tech}
              tooltip={data.tooltip}
              github_url={data.github_url}
              figma_url={data.figma_url}
              oa_url={data.oa_url}
              btn_img_icon={data.btn_img_icon}
            />
          );
        })}
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
