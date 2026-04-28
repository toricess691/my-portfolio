import { useParams } from 'react-router-dom';

function ProjectDetails()
{
    const { id } = useParams();

    const projects = 
    {
        1: 
        {
            title: "Facial Recognition using mesh",
            img: "/images/facial.png",
            desc: "Uses mesh-based detection for facial recognition."
        },
        2: 
        {
            title: "RateMyCSUSM",
            img: "/images/rating.png",
            desc: "Students can rate professors and share experiences."
        },
        3: 
        {
            title: "My Portfolio",
            img: "/images/portfolio.png",
            desc: "My personal website showcasing my work."
        }
    };

    const project = projects[id];

    if (!project) return <h2>Project not found</h2>;

    return(
    <div>
        <h1>{project.title}</h1>
        <img src={project.img} alt={project.title} />
        <p>
            {project.desc}
        </p>
    </div>
    );
}

export default ProjectDetails;