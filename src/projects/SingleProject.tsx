import { Link, useParams } from "solid-app-router";
import { Component, For, Show } from "solid-js";
import { getProjectByIndex } from "../services/projects.service";
import { getSkillsByIndex } from "../services/skills.service";

const SingleProject: Component = () => {

    const routeParams = useParams();
    const project = getProjectByIndex(+routeParams.id);
    const projectTechnologies = getSkillsByIndex(project.technologies);

    const categories = {
        web_application: 'Application web',
        website: 'Site web',
        mobile_application: 'Application mobile',
        company: 'Entreprise',
        youtube_channel: 'Chaîne YouTube'
    }

    return(
        <div className="container mx-auto pt-20 md:pt-28 my-10 lg:my-20 px-5 md:px-0">
        <div class="pb-10 lg:pb-0">
            <Link href="/projects" className="text-xl ml-4 md:ml-0">
                <i class="fa-light fa-arrow-left"></i><span className="ml-3">Retour</span>
            </Link>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col h-full justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-amber-400 font-medium">
                    {project.title}
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin">{categories[project.category]}</h2>
                <hr className="bg-amber-400 h-0.5 border-0 w-2/3 my-5" />
                <p className="text-neutral-400 flex flex-col mb-10">
                    {project.description}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-amber-400">Technologies utilisées</h2>
                <div className="flex justify-left flex-wrap gap-4 pt-5 mb-10">
                    <For each={projectTechnologies}>
                        {(technology) => (
                            <div className="bg-black h-24 w-24 lg:h-32 lg:w-32 flex flex-col">
                                <div className="px-5 mt-auto">
                                    <img src={technology.imageUrl} alt={technology.name + ' logo'} className="w-3/4 mx-auto"/>
                                </div>
                                <p className="text-center text-md lg:text-xl md:mt-auto mb-4">{technology.name}</p>
                            </div>
                        )}
                    </For>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-amber-400">Disponibilité</h2>
                <Show when={project.projectUrl.externalUrl && project.projectUrl.externalUrl !== ''}>
                    <Link href={project.projectUrl.externalUrl!} target={project.projectUrl.externalTarget} className="my-5 underline underline-offset-2">Disponible ici !</Link>
                </Show>
                <Show when={!project.projectUrl.externalUrl || project.projectUrl.externalUrl && project.projectUrl.externalUrl === ''}>
                    <p className="my-5">Non disponible au public</p>
                </Show>
            </div>
            <Show when={project.mainPhoto} fallback={<div>No image</div>}>
                <div className="ml-auto w-full md:pl-5">
                    <img src={project.mainPhoto} className="w-full rounded-tl-3xl" alt={project.title} />
                </div>
            </Show>
        </div>
        </div>
    );

}

export default SingleProject;