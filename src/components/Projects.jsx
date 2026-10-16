import ProjectCard from "./ProjectCard.jsx";

function Projects({project}) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured<span className="gradient-text">Project</span></h2>

        <div className="grid project-grid">
       {
        project.map((project)=>(
             <ProjectCard  key={project.id}project = {project}/>
        ))
       }
        </div>
      </div>
    </section>
  );
}

export default Projects;