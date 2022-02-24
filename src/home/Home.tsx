import { Component } from "solid-js";
import PageIntro from "../common/PageIntro";
import bryanImage from '../assets/bryan_home.jpg';
import Technologies from './Technologies';
import ExperiencesAndProjects from './ExperiencesAndProjects';
import WorkedTogether from './WorkedTogether';
import Footer from '../common/Footer';

const Home: Component = () => {
    return (
        <div className="h-full">
            <PageIntro title="Développeur Formateur" subtitle="Web et Mobile" image={bryanImage}/>
            <Technologies />
            <ExperiencesAndProjects />
            <WorkedTogether />
            <Footer />
        </div>
    );
};

export default Home;