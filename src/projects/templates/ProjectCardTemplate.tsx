import { Component, For, splitProps } from "solid-js";
import Project from "../interfaces/project.interface";

const ProjectCardTemplate: Component<{project: Project}> = (props) => {

    const [local, other] = splitProps(props, ['project']);

    const categories = {
        web_application: 'Application web',
        website: 'Site web',
        mobile_application: 'Application mobile',
        company: 'Entreprise',
        youtube_channel: 'Chaîne YouTube'
    }

    return(
        <div className="bg-black pt-8 pl-8 flex flex-col w-80 lg:w-96">
            <h3 className="text-4xl lg:text-5xl font-bold">{ local.project.title }</h3>
            <h4 className="text-xl lg:text-2xl mb-5">{ categories[local.project.category] }</h4>
            <p className="text-neutral-400 mb-3">{ local.project.description }</p>
            <button className="mb-5 text-xl mr-auto">En savoir plus <i class="fa-light fa-arrow-right ml-3 text-lg"></i></button>
            <img src={local.project.mainPhoto} alt="iziA Dashboard" className="w-full rounded-tl-3xl mt-auto" />
        </div>
    );

}

export default ProjectCardTemplate;