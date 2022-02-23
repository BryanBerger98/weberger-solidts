import { Component } from "solid-js";
import PageIntro from "../common/PageIntro";
import bryanImage from '../assets/bryan_home.jpg';

const Home: Component = () => {
    return (
        <div className="h-full">
            <PageIntro title="Développeur Formateur" subtitle="Web et Mobile" image={bryanImage}/>
            {/* <p>Home works</p> */}
        </div>
    );
};

export default Home;