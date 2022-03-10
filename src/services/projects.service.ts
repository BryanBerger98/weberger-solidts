import Project from "../interfaces/project.interface";

import joinerWebsite from "../assets/joiner_website.jpeg";
import iziADashboard from "../assets/iziA_dashboard.jpeg";
import fitFoodReceipes from "../assets/FitFood/fitfood_receipes_cropped.jpg";
import campingCar from "../assets/camping_car.jpeg";
import crossfitLaFontaineWebsite from "../assets/crossfit_la_fontaine_website.jpeg";

const projects: Project[] = [
    {
        title: 'Joiner',
        subtitle: 'Centre de formation - ESN',
        category: 'company',
        type: 'professional',
        description: 'CTO chez Joiner de 2019 à 2021. Une expérience d\'un an et demi très riche en connaissances et en compétences. Autant au niveau technique que humain.',
        mainPhoto: joinerWebsite,
        technologies: [8],
        projectUrl: {
            hasInternalUrl: true,
            externalUrl: 'https://www.joiner.fr',
            externalTarget: '_blank'
        },
        showOnHomePage: true
    },
    {
        title: 'iziA',
        subtitle: 'Application métier pour le CFA AFIA',
        category: 'web_application',
        type: 'professional',
        description: 'Mon plus gros projet lors de mon expérience de CTO à Joiner. Une application permettant au client de gérer ses contrats d\'apprentissage et d\'optimiser les coûts de ceux-ci.',
        mainPhoto: iziADashboard,
        technologies: [1, 3, 5, 8],
        projectUrl: {
            hasInternalUrl: true
        },
        showOnHomePage: true
    },
    {
        title: 'CrossFit La Fontaine',
        subtitle: 'Site web pour la salle de sport CrossFit La Fontaine à Château-Thierry',
        category: 'website',
        type: 'professional',
        description: 'Le gérant de la salle CrossFit la Fontaine avait besoin de remettre son site web à neuf et de booster son référencement ainsi qu\'une petite interface d\'administration !',
        mainPhoto: crossfitLaFontaineWebsite,
        technologies: [5, 8, 0],
        projectUrl: {
            hasInternalUrl: true,
            externalUrl: 'https://crossfit-lafontaine.com',
            externalTarget: '_blank'
        },
        showOnHomePage: false
    },
    {
        title: 'FitFood',
        subtitle: 'Recettes, listes de courses et scan de produits',
        category: 'mobile_application',
        type: 'personnal',
        description: 'Une application pour créer des recettes, gérer ses listes de courses et scanner des produits afin de connaître leur composition.',
        mainPhoto: fitFoodReceipes,
        technologies: [1, 3, 7],
        projectUrl: {
            hasInternalUrl: true
        },
        showOnHomePage: false
    },
    {
        title: 'Sky is Nowhere',
        subtitle: 'Rénover un camping-car pour voyager',
        category: 'youtube_channel',
        type: 'other',
        description: 'En mars dernier j\'ai acheté un camping-car pour pouvoir partir en voyage. Problème… il y a tout à refaire ! Je partage l\'évolution des travaux sur la chaîne YouTube "Sky is Nowhere” ainsi que d\'autres vidéos sur tout un tas de sujets !',
        mainPhoto: campingCar,
        technologies: [],
        projectUrl: {
            hasInternalUrl: false,
            externalUrl: 'https://www.youtube.com/c/SkyisNowhere',
            externalTarget: '_blank'
        },
        showOnHomePage: false
    }
];

export const getProjects = (): Project[] => {
    return projects;
}

export const getProjectByIndex = (index: number): Project => {
    return projects[index];
}

export const getProjectsToShowOnHomePage = (): Project[] => {
    return projects.filter(el => el.showOnHomePage);
}