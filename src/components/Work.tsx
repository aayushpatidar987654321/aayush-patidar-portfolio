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
    link: "https://drive.google.com/file/d/1UaldUo9B75PZIz8KGih2G9KU1BhDzlGQ/view",
  },
  {
    title: "AI Aradhana",
    category: "AI Commercial",
    tools: "Google Flow • AI Video • Editing",
    video: "Ai Aradhana.mp4",
    link: "https://drive.google.com/file/d/1trNRolVGdjbeoBenPMSJkcDVbqohTTY8/view",
  },
  {
    title: "Glasseo",
    category: "Product / Eyewear",
    tools: "Premiere Pro • AI • Color Grading",
    video: "Glasseo.mp4",
    link: "https://drive.google.com/file/d/1C7_M1QJ6BVX3drRllTsU0U9azX2gOWk_/view",
  },
  {
    title: "Cinematic Edit",
    category: "Cinematic Video",
    tools: "Premiere Pro • Color Grading • Sound Design",
    video: "Cinematic.mp4",
    link: "https://drive.google.com/file/d/1KbbGQtroWcaoHXNQOqM23-8Bp3IR5A3M/view",
  },
  {
    title: "Cheerio Text",
    category: "Motion Graphics",
    tools: "After Effects • Motion Graphics • Typography",
    video: "Cheerio Text.mp4",
    link: "https://drive.google.com/file/d/1rNQEHiDYGzhTWgzt_f-DHLK3QnTlc3hB/view",
  },
  {
    title: "Images to Video",
    category: "AI Video",
    tools: "AI Tools • Google Flow • Editing",
    video: "Images To Video.mp4",
    link: "https://drive.google.com/file/d/1r8nkIa3tFf13nC9jGCK9g-lbbNMzotfi/view",
  },
  {
    title: "Mobile AI",
    category: "AI Creative",
    tools: "AI Tools • Motion • Video Editing",
    video: "Mobile Ai.mp4",
    link: "https://drive.google.com/file/d/1OsVruP4zVv8qmj--afRJBnuKgWeFlmEb/view",
  },
  {
    title: "Modi Ji",
    category: "Social Media Content",
    tools: "Premiere Pro • Editing • AI Tools",
    video: "Modi Ji.mp4",
    link: "https://drive.google.com/file/d/1YvHmk8mNkMwrJBhwA3U7S7R62gLsJrLY/view",
  },
  {
    title: "Mumuso",
    category: "Brand Content",
    tools: "Premiere Pro • Creative Editing • Storytelling",
    video: "Mumuso.mp4",
    link: "https://drive.google.com/file/d/1ZRdqeYJfY5UNKddeKH1VfGKTQNC5Ua5A/view",
  },
  {
    title: "Navaratri Creative",
    category: "Festival Campaign",
    tools: "AI Video • Motion Graphics • Editing",
    video: "Navaratri Creative.mp4",
    link: "https://drive.google.com/file/d/19kQrlnOH3q8zCcvHzGyuPQ3jnO4NK7nJ/view",
  },
  {
    title: "Sound Healing",
    category: "Wellness Content",
    tools: "Video Editing • Color Grading • Sound Design",
    video: "Sound Healing.mp4",
    link: "https://drive.google.com/file/d/1e1iu5XCc3uARu3oz4f2wZsTSfXZoZCIG/view",
  },
  {
    title: "Yezdi",
    category: "Automotive / Cinematic",
    tools: "Premiere Pro • Color Grading • Cinematic Editing",
    video: "yezdi_1.mp4",
    link: "https://drive.google.com/file/d/1-jvGobQ6pjNn6jFT7Hdug22feGAQCZHB/view",
  },
  {
    title: "2D Character",
    category: "Character Animation",
    tools: "Animation • AI • Creative Editing",
    video: "2D Character.mp4",
    link: "https://drive.google.com/file/d/1q_dMwMgzstukQbmm6tvKNxByt2EctyW1/view",
  },
  {
    title: "2D Animation",
    category: "Animation",
    tools: "Motion Graphics • Animation • Editing",
    video: "2D-Animation.mp4",
    link: "https://drive.google.com/file/d/1_adbc65Ea5AAatepdJ3LX6taIdZ67plZ/view",
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
  image={`/thumbnails/${project.video.replace(".mp4", ".png")}`}
  link={project.link}
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