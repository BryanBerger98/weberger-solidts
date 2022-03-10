import { Link } from "solid-app-router";
import { Component, For, splitProps } from "solid-js";
import Project from "../../interfaces/project.interface";

const ProjectCardTemplate: Component<{project: Project, projectIndex: number}> = (props) => {

    const [local, other] = splitProps(props, ['project', 'projectIndex']);

    const categories = {
        web_application: 'Application web',
        website: 'Site web',
        mobile_application: 'Application mobile',
        company: 'Entreprise',
        youtube_channel: 'Chaîne YouTube'
    }

    return(
        <Link href={local.project.projectUrl.hasInternalUrl ? `/projects/${local.projectIndex}` : local.project.projectUrl.externalUrl ? local.project.projectUrl.externalUrl : '/projects'} target={local.project.projectUrl.hasInternalUrl ? '_self' : local.project.projectUrl.externalTarget}>
            <div className="bg-black pt-8 pl-8 flex flex-col h-full w-80 lg:w-96 transform hover:cursor-pointer hover:scale-105 duration-150">
                <h3 className="text-4xl lg:text-5xl font-bold">{ local.project.title }</h3>
                <h4 className="text-xl lg:text-2xl mb-5">{ categories[local.project.category] }</h4>
                <p className="text-neutral-400 mb-3 mt-auto">{ local.project.description }</p>
                <button className="mb-5 text-xl mr-auto">En savoir plus <i class="fa-light fa-arrow-right ml-3 text-lg"></i></button>
                <img src={local.project.mainPhoto} alt={local.project.title} loading="lazy" className="w-full rounded-tl-3xl mt-auto" />
            </div>
        </Link>
    );

}

export default ProjectCardTemplate;