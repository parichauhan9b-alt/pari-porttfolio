import { Mail, Github, Linkedin } from "lucide-react";

function Contact({email,socials}) {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">let's<span className="gradient-text">contact</span></h2>
          <p className="muted">I am open to internships and junior roles.</p>

          <div className="contact-links">
            <a className="icon-link icon-link-text" href={`mailto:${email}`}><Mail size={18} />{email}</a>
            <a className="icon-link icon-link-text" href={socials.Github}><Github size={18} />Github</a>
            <a className="icon-link icon-link-text" href ={socials.Linkedin}><Linkedin size={18} />Linkedin</a>
          </div>

          <a className="btn btn-primary">contact me</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
