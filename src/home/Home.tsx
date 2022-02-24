import { Component } from "solid-js";
import PageIntro from "../common/PageIntro";
import bryanImage from '../assets/bryan_home.jpg';
import Technologies from './Technologies';
import ExperiencesAndProjects from './ExperiencesAndProjects';

const Home: Component = () => {
    return (
        <div className="h-full">
            <PageIntro title="Développeur Formateur" subtitle="Web et Mobile" image={bryanImage}/>
            <Technologies />
            <ExperiencesAndProjects />
        </div>
    );
};

export default Home;