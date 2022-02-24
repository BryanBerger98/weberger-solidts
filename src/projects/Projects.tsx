import { Component, For } from "solid-js";
import PageIntro from "../common/PageIntro";
import bryanWork from "../assets/bryan_work.jpg";
import Footer from "../common/Footer";
import ProfessionalProjects from "./ProfessionalProjects";

import joinerWebsite from "../assets/joiner_website.jpeg";
import iziADashboard from "../assets/iziA_dashboard.jpeg";
import fitFoodReceipes from "../assets/FitFood/fitfood_receipes_cropped.jpg";
import campingCar from "../assets/camping_car.jpeg";
import Project from "./interfaces/project.interface";

const Projects: Component = () => {

    const projects: Project[] = [
        {
            title: 'Joiner',
            subtitle: 'Centre de formation - ESN',
            category: 'company',
            type: 'professional',
            description: 'CTO chez Joiner de 2019 à 2021. Une expérience d\'un an et demi très riche en connaissances et en compétences. Autant au niveau technique que humain.',
            mainPhoto: joinerWebsite,
            technologies: []
        },
        {
            title: 'iziA',
            subtitle: 'Application métier pour le CFA AFIA',
            category: 'web_application',
            type: 'professional',
            description: 'Mon plus gros projet lors de mon expérience de CTO à Joiner. Une application permettant au client de gérer ses contrats d\'apprentissage et d\'optimiser les coûts de ceux-ci.',
            mainPhoto: iziADashboard,
            technologies: []
        },
        {
            title: 'FitFood',
            subtitle: 'Recettes, listes de courses et scan de produits',
            category: 'mobile_application',
            type: 'personnal',
            description: 'Une application pour créer des recettes, gérer ses listes de courses et scanner des produits afin de connaître leur composition.',
            mainPhoto: fitFoodReceipes,
            technologies: []
        },
        {
            title: 'Sky is Nowhere',
            subtitle: 'Rénover un camping-car pour voyager',
            category: 'youtube_channel',
            type: 'other',
            description: 'En mars dernier j\'ai acheté un camping-car pour pouvoir partir en voyage. Problème… il y a tout à refaire ! Je partage l\'évolution des travaux sur la chaîne YouTube "Sky is Nowhere” ainsi que d\'autres vidéos sur tout un tas de sujets !',
            mainPhoto: campingCar,
            technologies: []
        }
    ];

    return(
        <>
            <PageIntro title="Mes projets" subtitle="Pro et perso" image={bryanWork} firstParagraph="Retrouvez ici tous mes projets web et mobile. Mais pas seulement ! Vous y verrez aussi mes projets personnels." />
            <ProfessionalProjects projects={projects}/>
            <Footer />
        </>
    );

}

export default Projects;