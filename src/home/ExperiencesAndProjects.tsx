import { Link } from "solid-app-router";
import { Component, For, Show } from "solid-js";
import Project from "../interfaces/project.interface";
import ProjectCardTemplate from "../projects/templates/ProjectCardTemplate";
import { getProjectsToShowOnHomePage } from "../services/projects.service";

const ExperiencesAndProjects: Component = () => {

    const projects: Project[] = getProjectsToShowOnHomePage();

    return (
        <div className="container mx-auto py-10">
            <div className="flex">
            <h2 className="mx-auto text-2xl md:text-4xl">
                Expériences et <span className="text-amber-400">projets</span>
                <hr className="border-0 h-px mb-8 lg:mb-16 w-1/2 bg-neutral-700" />
            </h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <For each={projects}>
                    {(project, index) => (
                        <ProjectCardTemplate project={project} projectIndex={index()}/>
                    )}
                </For>
            </div>
            <div className="flex mt-3 lg:mt-5 xl:mt-10 py-5">
                <Link className="mx-auto" href="/projects">
                    Voir tous les projets et expériences <i class="fa-light fa-arrow-right ml-3 text-lg"></i>
                </Link>
            </div>
        </div>
    );
};

export default ExperiencesAndProjects;