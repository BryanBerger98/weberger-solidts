import Skill from "./skill.interface";

export default interface SkillsGroup {
    title: string;
    icon: string;
    color: string;
    skills: Skill[]
} 