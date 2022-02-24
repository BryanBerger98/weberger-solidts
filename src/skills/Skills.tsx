import { Component, For } from "solid-js";
import PageIntro from "../common/PageIntro";
import bryanWork from "../assets/bryan_work.jpg";
import SkillsGroup from "./SkillsGroup";

import firebaseLogo from "../assets/Firebase_logo.png";
import mongoDBLogo from "../assets/MongoDB_logo.png";
import rethinkDBLogo from "../assets/RethinkDB_logo.png";
import nodeJSLogo from "../assets/Nodejs_logo.png";
import nestJSLogo from "../assets/NestJS_logo.svg";
import angularLogo from "../assets/Angular_logo.png";
import angularMaterialLogo from "../assets/AngularMaterial_logo.png";
import ionicLogo from "../assets/Ionic_logo.png"
import bootstrapLogo from "../assets/Bootstrap_logo.png";
import materializeLogo from "../assets/Materialize_logo.png";
import tailwindCSSLogo from "../assets/TailwindCSS_logo.png";
import vsCodeLogo from "../assets/VisualStudioCode_logo.png";
import gitLogo from "../assets/Git_logo.png";
import appleLogo from "../assets/Apple_logo.png";
import adobeXDLogo from "../assets/AdobeXD_logo.png";
import Footer from "../common/Footer";

const Skills: Component = () => {

    const skillGroups = [
        {
            title: {
                text: 'Bases de données',
                color: '#3590F3'
            },
            icon: 'fa-light fa-database',
            skills: [
                {
                    skillName: 'Firebase',
                    skillImageUrl: firebaseLogo
                },
                {
                    skillName: 'MongoDB',
                    skillImageUrl: mongoDBLogo
                },
                {
                    skillName: 'RethinkDB',
                    skillImageUrl: rethinkDBLogo
                }
            ]
        },
        {
            title: {
                text: 'Backend',
                color: '#9BC53D'
            },
            icon: 'fa-light fa-server',
            skills: [
                {
                    skillName: 'Firebase',
                    skillImageUrl: firebaseLogo
                },
                {
                    skillName: 'NodeJS',
                    skillImageUrl: nodeJSLogo
                },
                {
                    skillName: 'Nest JS',
                    skillImageUrl: nestJSLogo
                }
            ]
        },
        {
            title: {
                text: 'Frontend',
                color: '#EB5E28'
            },
            icon: 'fa-light fa-desktop',
            skills: [
                {
                    skillName: 'Angular',
                    skillImageUrl: angularLogo
                },
                {
                    skillName: 'Angular Material',
                    skillImageUrl: angularMaterialLogo
                },
                {
                    skillName: 'Ionic',
                    skillImageUrl: ionicLogo
                }
            ]
        },
        {
            title: {
                text: 'Frameworks CSS',
                color: '#FF499E'
            },
            icon: 'fa-light fa-window',
            skills: [
                {
                    skillName: 'Bootstrap',
                    skillImageUrl: bootstrapLogo
                },
                {
                    skillName: 'Materialize',
                    skillImageUrl: materializeLogo
                },
                {
                    skillName: 'Tailwind',
                    skillImageUrl: tailwindCSSLogo
                }
            ]
        },
        {
            title: {
                text: 'Environnement',
                color: '#F7B32B'
            },
            icon: 'fa-light fa-keyboard',
            skills: [
                {
                    skillName: 'VS Code',
                    skillImageUrl: vsCodeLogo
                },
                {
                    skillName: 'Git',
                    skillImageUrl: gitLogo
                },
                {
                    skillName: 'Mac OS',
                    skillImageUrl: appleLogo
                }
            ]
        },
        {
            title: {
                text: 'Design',
                color: '#A67DB8'
            },
            icon: 'fa-light fa-pencil-paintbrush',
            skills: [
                {
                    skillName: 'Adobe XD',
                    skillImageUrl: adobeXDLogo
                }
            ]
        }
    ];

    return(
        <>
            <PageIntro title="Compétences" subtitle="Humaines et techniques" image={bryanWork} firstParagraph="Retrouvez ici toutes mes compétences et les technologies associées." />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 pt-10 pb-20">
                <For each={skillGroups}>
                    {(skillGroup) => (
                        <SkillsGroup title={skillGroup.title} icon={skillGroup.icon} skills={skillGroup.skills}/>
                    )}
                </For>
            </div>
            <Footer />
        </>
    );

}

export default Skills;