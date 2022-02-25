import { Component, For } from "solid-js";
import PageIntro from "../common/PageIntro";
import bryanWork from "../assets/bryan_work.jpg";
import SkillsGroup from "./SkillsGroup";
import Footer from "../common/Footer";
import SkillsGroupInterface from "../interfaces/skills-group.interface";
import { getSkillsGroups } from "../services/skills.service";

const Skills: Component = () => {

    const skillGroups: SkillsGroupInterface[] = getSkillsGroups();

    return(
        <>
            <PageIntro title="Compétences" subtitle="Humaines et techniques" image={bryanWork} firstParagraph="Retrouvez ici toutes mes compétences et les technologies associées." />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 pt-10 pb-20">
                <For each={skillGroups}>
                    {(skillGroup) => (
                        <SkillsGroup skillGroup={skillGroup}/>
                    )}
                </For>
            </div>
            <Footer />
        </>
    );

}

export default Skills;