import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);

  // Ensure the section is always rendered
  if (!bigProjects.display) {
    return null;
  }

  return (
    <div className="main" id="projects">
      <h1 className="skills-heading">{bigProjects.title}</h1>
      <p
        className={
          isDark
            ? "dark-mode project-subtitle"
            : "subTitle project-subtitle"
        }
      >
        {bigProjects.subtitle}
      </p>
      <div className="projects-container">
        {bigProjects.projects.map((project, i) => (
          <div
            key={i}
            className={
              isDark
                ? "dark-mode project-card project-card-dark"
                : "project-card project-card-light"
            }
          >
            {project.image && (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="card-image"
                />
              </div>
            )}
            <div className="project-detail">
              <h5
                className={
                  isDark ? "dark-mode card-title" : "card-title"
                }
              >
                {project.projectName}
              </h5>
              <p
                className={
                  isDark ? "dark-mode card-subtitle" : "card-subtitle"
                }
              >
                {project.projectDesc}
              </p>
              {project.footerLink && (
                <div className="project-card-footer">
                  {project.footerLink.map((link, i) => (
                    <span
                      key={i}
                      className={
                        isDark
                          ? "dark-mode project-tag"
                          : "project-tag"
                      }
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      {link.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
