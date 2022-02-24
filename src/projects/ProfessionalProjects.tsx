import { Component, For, Show, splitProps } from "solid-js";
import Project from "./interfaces/project.interface";
import ProjectBannerTemplate from "./templates/ProjectBannerTemplate";
import ProjectCardTemplate from "./templates/ProjectCardTemplate";

const ProfessionalProjects: Component<{projects: Project[]}> = (props) => {

    const [local, other] = splitProps(props, ['projects']);

    return(
        <div className="container mx-auto py-10">
            <div className="flex">
                <h2 className="mx-auto text-2xl md:text-4xl">
                    <span className="text-amber-400">Projets</span> professionnels
                    <hr className="border-0 h-px mb-8 lg:mb-16 w-1/2 bg-neutral-700" />
                </h2>
            </div>
            <div className="flex flex-wrap gap-4 mb-32 justify-center">
                <For each={local.projects}>
                    {(project) => (
                        <Show when={project.type === 'professional'}>
                            <ProjectCardTemplate project={project}/>
                        </Show>
                    )}
                </For>
            </div>
            <div className="flex">
                <h2 className="mx-auto text-2xl md:text-4xl">
                    Projets <span className="text-amber-400">personnels</span>
                    <hr className="border-0 h-px mb-8 lg:mb-16 w-1/2 bg-neutral-700" />
                </h2>
            </div>
            <div className="flex flex-wrap gap-4 mb-32 justify-center">
                <For each={local.projects}>
                    {(project) => (
                        <Show when={project.type === 'personnal'}>
                            <ProjectCardTemplate project={project}/>
                        </Show>
                    )}
                </For>
            </div>
            <div className="flex">
                <h2 className="mx-auto text-2xl md:text-4xl">
                    <span className="text-amber-400">Autres activités</span> personnelles
                    <hr className="border-0 h-px mb-8 lg:mb-16 w-1/2 bg-neutral-700" />
                </h2>
            </div>
            <div className="flex flex-wrap gap-4 mb-32 justify-center">
                <For each={local.projects}>
                    {(project) => (
                        <Show when={project.type === 'other'}>
                            <ProjectBannerTemplate project={project}/>
                        </Show>
                    )}
                </For>
            </div>
        </div>
    );

}

export default ProfessionalProjects;