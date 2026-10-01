import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "AI UGC",
    category: "AI Video / UGC",
    tools: "Google Flow • AI Tools • Video Editing",
    video: "Ai Ugc.mp4",
  },
  {
    title: "AI Aradhana",
    category: "AI Commercial",
    tools: "Google Flow • AI Video • Editing",
    video: "Ai Aradhana.mp4",
  },
  {
    title: "Glasseo",
    category: "Product / Eyewear",
    tools: "Premiere Pro • AI • Color Grading",
    video: "Glasseo.mp4",
  },
  {
    title: "Cinematic Edit",
    category: "Cinematic Video",
    tools: "Premiere Pro • Color Grading • Sound Design",
    video: "Cinematic.mp4",
  },
  {
    title: "Cheerio Text",
    category: "Creative Motion",
    tools: "Motion Graphics • AI • Video Editing",
    video: "Cheerio Text.mp4",
  },
  {
    title: "Images to Video",
    category: "AI Video",
    tools: "AI Tools • Google Flow • Editing",
    video: "Images To Video.mp4",
  },
  {
    title: "Mobile AI",
    category: "AI Creative",
    tools: "AI Tools • Motion • Video Editing",
    video: "Mobile Ai.mp4",
  },
  {
    title: "Mumuso",
    category: "Brand Content",
    tools: "Premiere Pro • Creative Editing • Storytelling",
    video: "Mumuso.mp4",
  },
  {
    title: "Navaratri Creative",
    category: "Festival Campaign",
    tools: "AI Video • Motion Graphics • Editing",
    video: "Navaratri Creative.mp4",
  },
  {
    title: "2D Animation",
    category: "Animation",
    tools: "Motion Graphics • Animation • Editing",
video: "2D-Animation.mp4",
  },
  {
    title: "2D Character",
    category: "Character Animation",
    tools: "Animation • AI • Creative Editing",
    video: "2D Character.mp4",
  },
  {
    title: "Modi Ji",
    category: "Social Media Content",
    tools: "Premiere Pro • Editing • AI Tools",
    video: "Modi Ji.mp4",
  },
  {
    title: "Sound Healing",
    category: "Creative Video",
    tools: "Editing • Sound Design • Color Grading",
    video: "Sound Healing.mp4",
  },
  {
    title: "Yezdi Motorcycle",
    category: "Cinematic Commercial",
    tools: "Premiere Pro • Color Grading • Sound Design",
    video: "yezdi_1.mp4",
  },
];

const Work = () => {
  useGSAP(() => {
    const boxes = gsap.utils.toArray<HTMLElement>(".work-box");

    if (!boxes.length) return;

    const updateAnimation = () => {
      const container = document.querySelector(".work-flex") as HTMLElement;

      if (!container) return;

      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(".work-flex", {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    };

    updateAnimation();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.video}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools &amp; Skills</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image="/images/placeholder.webp"
                video={project.video}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;