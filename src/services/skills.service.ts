import Skill from "../interfaces/skill.interface";
import SkillsGroup from "../interfaces/skills-group.interface";

import firebaseLogo from "../assets/skills/Firebase_logo.png";
import mongoDBLogo from "../assets/skills/MongoDB_logo.png";
import rethinkDBLogo from "../assets/skills/RethinkDB_logo.png";
import nodeJSLogo from "../assets/skills/Nodejs_logo.png";
import nestJSLogo from "../assets/skills/NestJS_logo.svg";
import angularLogo from "../assets/skills/Angular_logo.png";
import angularMaterialLogo from "../assets/skills/AngularMaterial_logo.png";
import ionicLogo from "../assets/skills/Ionic_logo.png"
import bootstrapLogo from "../assets/skills/Bootstrap_logo.png";
import materializeLogo from "../assets/skills/Materialize_logo.png";
import tailwindCSSLogo from "../assets/skills/TailwindCSS_logo.png";
import vsCodeLogo from "../assets/skills/VisualStudioCode_logo.png";
import gitLogo from "../assets/skills/Git_logo.png";
import appleLogo from "../assets/skills/Apple_logo.png";
import adobeXDLogo from "../assets/skills/AdobeXD_logo.png";
import solidJSLogo from "../assets/skills/SolidJS_logo.jpg";
import reactLogo from "../assets/skills/ReactJS_logo.png";

const skills: Skill[] = [
    {
        name: 'Firebase',
        imageUrl: firebaseLogo
    },
    {
        name: 'MongoDB',
        imageUrl: mongoDBLogo
    },
    {
        name: 'RethinkDB',
        imageUrl: rethinkDBLogo
    },
    {
        name: 'NodeJS',
        imageUrl: nodeJSLogo
    },
    {
        name: 'Nest JS',
        imageUrl: nestJSLogo
    },
    {
        name: 'Angular',
        imageUrl: angularLogo
    },
    {
        name: 'Angular Material',
        imageUrl: angularMaterialLogo
    },
    {
        name: 'Ionic',
        imageUrl: ionicLogo
    },
    {
        name: 'Bootstrap',
        imageUrl: bootstrapLogo
    },
    {
        name: 'Materialize',
        imageUrl: materializeLogo
    },
    {
        name: 'Tailwind',
        imageUrl: tailwindCSSLogo
    },
    {
        name: 'VS Code',
        imageUrl: vsCodeLogo
    },
    {
        name: 'Git',
        imageUrl: gitLogo
    },
    {
        name: 'Mac OS',
        imageUrl: appleLogo
    },
    {
        name: 'Adobe XD',
        imageUrl: adobeXDLogo
    },
    {
        name: 'SolidJS',
        imageUrl: solidJSLogo
    },
    {
        name: 'React',
        imageUrl: reactLogo
    },
    {
        name: 'React Native',
        imageUrl: reactLogo
    }
];
const skillGroups: SkillsGroup[] = [
    {
        title: 'Frontend',
        color: '#EB5E28',
        icon: 'fa-light fa-desktop',
        skills: [
            skills[5],
            skills[16],
            skills[15]
        ]
    },
    {
        title: 'Mobile',
        color: '#26F0F1',
        icon: 'fa-light fa-mobile-notch',
        skills: [
            skills[7],
            skills[17]
        ]
    },
    {
        title: 'Frameworks CSS',
        color: '#FF499E',
        icon: 'fa-light fa-window',
        skills: [
            skills[8],
            skills[9],
            skills[10]
        ]
    },
    {
        title: 'Bases de données',
        color: '#3590F3',
        icon: 'fa-light fa-database',
        skills: [
            skills[0],
            skills[1],
            skills[2]
        ]
    },
    {
        title: 'Backend',
        color: '#9BC53D',
        icon: 'fa-light fa-server',
        skills: [
            skills[0],
            skills[3],
            skills[4]
        ]
    },
    {
        title: 'Environnement',
        color: '#F7B32B',
        icon: 'fa-light fa-keyboard',
        skills: [
            skills[11],
            skills[12],
            skills[13]
        ]
    },
    {
        title: 'Design',
        color: '#A67DB8',
        icon: 'fa-light fa-pencil-paintbrush',
        skills: [
            skills[14]
        ]
    }
];

export const getSkills = (): Skill[] => {
    return skills;
}

export const getSkillsGroups = (): SkillsGroup[] => {
    return skillGroups;
}

export const getSkillByIndex = (index: number): Skill => {
    return skills[index];
}

export const getSkillsByName = (names: string[]): Skill[] => {
    const foundSkills = skills.filter(skill => names.includes(skill.name));
    return foundSkills;
}

export const getSkillsByIndex = (indexes : number[]): Skill[] => {
    const foundSkills = skills.filter((skill, index) => indexes.includes(index));
    return foundSkills;
}