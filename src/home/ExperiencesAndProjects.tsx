import { Component } from "solid-js";
import iziADashboard from '../assets/iziA_dashboard.jpeg';
import joinerWebsite from '../assets/joiner_website.jpeg';

const ExperiencesAndProjects: Component = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <h2 className="text-center text-2xl md:text-4xl mb-8 lg:mb-16">Expériences et <span className="text-amber-400">projets</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black pt-8 pl-8 flex flex-col">
                        <h3 className="text-5xl font-bold">iziA</h3>
                        <h4 className="text-2xl mb-5">Application métier pour le CFA AFIA</h4>
                        <p className="text-neutral-400 mb-3">
                            Mon plus gros projet lors de mon expérience de
                            CTO à Joiner. Une application permettant au client
                            de gérer ses contrats d’apprentissage et
                            d’optimiser les coûts de ceux-ci.
                        </p>
                        <button className="mb-5 text-xl mr-auto">En savoir plus <i class="fa-light fa-arrow-right ml-3 text-lg"></i></button>
                        <img src={iziADashboard} alt="iziA Dashboard" className="w-full rounded-tl-3xl mt-auto" />
                    </div>
                    <div className="bg-black pt-8 pl-8 flex flex-col">
                        <h3 className="text-5xl font-bold">Joiner</h3>
                        <h4 className="text-2xl mb-5">Centre de formation - ESN</h4>
                        <p className="text-neutral-400 mb-3">
                        CTO chez Joiner de 2019 à 2021. Une expérience
                        d’un an et demi très riche en connaissances et en
                        compétences. Autant au niveau technique que
                        humain.
                        </p>
                        <button className="mb-5 text-xl mr-auto">En savoir plus <i class="fa-light fa-arrow-right ml-3 text-lg"></i></button>
                        <img src={joinerWebsite} alt="Joiner Website" className="w-full rounded-tl-3xl mt-auto" />
                    </div>
                </div>
                <div className="flex mt-3 lg:mt-5 xl:mt-10 py-5">
                    <button className="mx-auto">Voir tous les projets et expériences <i class="fa-light fa-arrow-right ml-3 text-lg"></i></button>
                </div>
            </div>

        </>
    );
};

export default ExperiencesAndProjects;