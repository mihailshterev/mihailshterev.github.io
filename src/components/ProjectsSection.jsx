import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GiRingedPlanet } from "react-icons/gi";
import projectPlaceholder from "../assets/projects/project-placeholder.webp";
import MusicUniverse from "../assets/projects/musicUniverse.png";
import UniVerse from "../assets/projects/UniVerse.jpg";
import TuneSpace from "../assets/projects/tunespace.png";
import Sentium from "../assets/projects/sentium.png";

export const ProjectsSection = ({ elRef }) => {
  const [projectSelected, setProjectSelected] = useState("");
  const [image, setImage] = useState(null);
  const [projectTitle, setProjectTitle] = useState("Click on a planet to view a project");
  const [projectLink, setProjectLink] = useState("");

  const isInView = useInView(elRef, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    [Sentium, TuneSpace, UniVerse, MusicUniverse].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView]);

  function selectProject(id, image, projectTitle, projectLink) {
    if (id == projectSelected) {
      id = "";
      image = null;
      projectTitle = "Click on a planet to view a project";
      projectLink = "";
    }

    setProjectSelected(id);
    setImage(image);
    setProjectTitle(projectTitle);
    setProjectLink(projectLink);
  }

  return (
    <div ref={elRef} className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-display-container"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animationControls}
          transition={{ duration: 1 }}
        >
          <div className="system-container">
            <h2>Projects</h2>
            <div className="solar-system">
              <div className="ellipse"></div>
              <div className="solar-orbit1">
                <div
                  onClick={() => selectProject("1", Sentium, "Sentium", "https://github.com/mihailshterev/sentium")}
                  className={projectSelected == "1" ? "selected-planet" : "orbiting-ellipse"}
                ></div>
              </div>
              <div className="solar-orbit2">
                <div
                  onClick={() => selectProject("2", TuneSpace, "TuneSpace", "https://github.com/mihailshterev/tunespace")}
                  className={projectSelected == "2" ? "selected-planet" : "orbiting-ellipse"}
                ></div>
              </div>
              <div className="solar-orbit3">
                <div
                  onClick={() => selectProject("3", UniVerse, "UniVerse", "https://github.com/mihailshterev/universe-next")}
                  className={projectSelected == "3" ? "selected-planet" : "orbiting-ellipse"}
                ></div>
              </div>
              <div className="solar-orbit4">
                <div
                  onClick={() => selectProject("4", MusicUniverse, "Music Universe", "https://github.com/mihailshterev/music-universe")}
                  className={projectSelected == "4" ? "selected-planet" : "orbiting-ellipse"}
                ></div>
              </div>
            </div>
          </div>

          <div className="project-container">
            {projectSelected === "" ? (
              <div className="project-empty">
                <GiRingedPlanet className="project-empty-icon" />
                <p>{projectTitle}</p>
              </div>
            ) : (
              <>
                <h3>{projectTitle}</h3>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={projectSelected}
                    src={image}
                    alt={`${projectTitle} preview`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <a href={projectLink} target="_blank" rel="noreferrer">
                  <button>
                    <FaGithub />
                    View on GitHub
                  </button>
                </a>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
