import React from 'react';
import Navigation from './Navigation';

function Project(image, title, description, hostlink, repolink) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.hostlink = hostlink;
    this.repolink = repolink;
}

const projectsArray = [
    new Project("valendar.png", "Valendar", "Calendar, goals, and mood tracker built using vanilla Javascript", "https://habit-tracker-11f85.web.app/", "https://github.com/madeleinebarr/valendar"),
]

function ProjectPost(props) {
    return (
        <div className="post workpost">
            <img src={'./projects/' + props.image} alt={props.title} className="workImage"></img>

            <p className="worktitle">
                <span className="bold">{props.title}:</span>
                <br></br>
                {props.description}
            </p>
            <p><span className="hiddenonmobile"><a href={props.hostlink} target="_blank" rel="noopener noreferrer">hosted project</a>
                <br></br></span>
                <a href={props.repolink} target="_blank" rel="noopener noreferrer">project repository</a>
            </p>
        </div>
    )
}

function ProjectList(props) {
    const projects = props.projects;
    const listProjects = projects.map((project) => {
        return <ProjectPost
        key={project.title}
        image={project.image}
        title={project.title}
        description={project.description}
        hostlink={project.hostlink}
        repolink={project.repolink}

        />
    })
    return (
        <div className="workgrid">{listProjects}</div>
    )
}

const Work = () => {
    return (
        <div className="workPage">
            <Navigation />
            <div className="content workcontent">
            <ProjectList projects={projectsArray} />
            </div>
        </div>
    );
}

export default Work;