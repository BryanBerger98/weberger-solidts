import { Component, For, Show } from "solid-js";
import PageIntro from "../common/PageIntro";
import bryanWork from "../assets/bryan_work.jpg";
import Footer from "../common/Footer";
import ProjectCardTemplate from "./templates/ProjectCardTemplate";
import ProjectBannerTemplate from "./templates/ProjectBannerTemplate";

import Project from "../interfaces/project.interface";
import { getProjects } from "../services/projects.service";

const Projects: Component = () => {

    const projects: Project[] = getProjects();

    return(
        <>
            <PageIntro title="Mes projets" subtitle="Pro et perso" image={bryanWork} firstParagraph="Retrouvez ici tous mes projets web et mobile. Mais pas seulement ! Vous y verrez aussi mes projets personnels." />
            <div className="container mx-auto py-10">
            <div className="flex">
                <h2 className="mx-auto text-2xl md:text-4xl">
                    <span className="text-amber-400">Projets</span> professionnels
                    <hr className="border-0 h-px mb-8 lg:mb-16 w-1/2 bg-neutral-700" />
                </h2>
            </div>
            <div className="flex flex-wrap gap-4 mb-32 justify-center">
                <For each={projects}>
                    {(project, index) => (
                        <Show when={project.type === 'professional'}>
                            <ProjectCardTemplate project={project} projectIndex={index()}/>
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
                <For each={projects}>
                    {(project, index) => (
                        <Show when={project.type === 'personnal'}>
                            <ProjectCardTemplate project={project} projectIndex={index()}/>
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
                <For each={projects}>
                    {(project, index) => (
                        <Show when={project.type === 'other'}>
                            <ProjectBannerTemplate project={project} projectIndex={index()}/>
                        </Show>
                    )}
                </For>
            </div>
        </div>
            <Footer />
        </>
    );

}

export default Projects;