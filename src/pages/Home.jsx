function Home() 
{
    return(
        <main>
            {/* Hero Section */}
            <section className = "hero">
                <h1> Hi, I'm Sergio Torices Jr </h1>
                <p> 
                    Aspiring Computer Scientist! 
                </p>
            </section>

            {/* About Section */}
            <section id = "about"className = "section">
                <h2> About Me </h2>
                <p>
                    I'm a student currently learning about web and software development.
                    I love building projects with code to explore career options like a game developing.
                    Currently studying Computer Science at CSUSM.
                </p>
            </section>

            {/* Projects Section */}
            <section id = "projects" className = "section">
                <h2> Projects </h2>
                <div className = "projects-grid">
                    <ProjectCard
                        id = "1"
                        title = "Facial Recognition using mesh" 
                        desc = "An under development project where I can do matrix math for my Math 480 class."
                    />
                    <ProjectCard
                        id = "2"
                        title = "RateMyCSUSM"
                        desc = "CS370 Professor Rating system. For my semester long project developed by team and I."
                    />
                    <ProjectCard
                        id = "3"
                        title = "My Personal CS Portfolio"
                        desc = "A portfolio website(this one!). I am still putting the final touches..."
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id = "contact"className = "section">
                <h2> Contact </h2>
                <p> 
                    Email: toric001@csusm.edu
                </p>
                <p> 
                    GitHub: github.com/toricess691
                </p>
            </section>
        </main>
    );
}

import { Link } from 'react-router-dom';

function ProjectCard({ id, title, desc }) 
{
    return(
        <div className="project-card">
            <h3>
                <Link to={`/project/${id}`} className="project-link">
                    {title}
                </Link>
            </h3>
            <p>{desc}</p>
        </div>
    );
}

export default Home;