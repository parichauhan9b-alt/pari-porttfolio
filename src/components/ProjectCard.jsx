import { Github, ExternalLink } from "lucide-react";

function ProjectCard({project}) {
  return (
    <div className="card project-card">
      <div className="project-image">
        {
          project.image ? (
            <imag src={project.image} alt={project.tittle}/>
          ):(
            <span className="image-placeholder">{project.tittle[0]}</span>
          )
        }
      </div>

      <h3>{project.tittle}</h3>
      <p className="muted">{project.description}</p>

      <div className="badges">
        {
          project.technologies.map((tech)=>(
            <spam className="badge small"key= {tech}>{tech}</spam>
          ))
        }
      </div>

      <div className="project-links">
        <a className="btn btn-ghost btn-small" href={project.github}><Github size={16} /></a>
        <a className="btn btn-primary btn-small" href={project.demo}><ExternalLink size={16} /></a>
      </div>
    </div>
  );
}

export default ProjectCard;
