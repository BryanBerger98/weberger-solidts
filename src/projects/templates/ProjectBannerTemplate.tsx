import { Component, For, splitProps } from "solid-js";
import Project from "../interfaces/project.interface";

const ProjectBannerTemplate: Component<{project: Project}> = (props) => {

    const [local, other] = splitProps(props, ['project']);

    const categories = {
        web_application: 'Application web',
        website: 'Site web',
        mobile_application: 'Application mobile',
        company: 'Entreprise',
        youtube_channel: 'Chaîne YouTube'
    }

    return(
        <div className="bg-black p-8 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5 lg:col-span-3">
                <img src={local.project.mainPhoto} alt={local.project.mainPhoto} className="w-full" />
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-9">
                <h3 className="text-4xl lg:text-5xl font-bold">{ local.project.title }</h3>
                <h4 className="text-xl lg:text-2xl mb-5">{ categories[local.project.category] }</h4>
                <p className="text-neutral-400 mb-3">{ local.project.description }</p>
                <button className="mb-5 text-xl mr-auto">En savoir plus <i class="fa-light fa-arrow-right ml-3 text-lg"></i></button>
            </div>
        </div>
    );

}

export default ProjectBannerTemplate;