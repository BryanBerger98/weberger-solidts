import { Component } from "solid-js";
import angularLogo from '../assets/Angular_logo.png';
import nodeLogo from '../assets/Nodejs_logo.png';
import firebaseLogo from '../assets/Firebase_logo.png';
import mongoDBLogo from '../assets/MongoDB_logo.png';

const Technologies: Component = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <h2 className="text-center text-2xl md:text-4xl mb-8 lg:mb-16">Mes <span className="text-amber-400">technologies</span> préférées</h2>
                <div className="flex justify-center flex-wrap">
                    <div className="bg-black h-32 w-32 lg:h-44 lg:w-44 m-3 lg:m-5 xl:m-10 flex flex-col">
                        <div className="px-5 mt-auto">
                            <img src={angularLogo} alt="Angular logo" className="w-3/4 mx-auto"/>
                        </div>
                        <p className="text-center text-xl m-auto">Angular</p>
                    </div>
                    <div className="bg-black h-32 w-32 lg:h-44 lg:w-44 m-3 lg:m-5 xl:m-10 flex flex-col">
                        <div className="px-5 mt-auto">
                            <img src={nodeLogo} alt="Node JS logo" className="w-3/4 mx-auto"/>
                        </div>
                        <p className="text-center text-xl m-auto">Node JS</p>
                    </div>
                    <div className="bg-black h-32 w-32 lg:h-44 lg:w-44 m-3 lg:m-5 xl:m-10 flex flex-col">
                        <div className="px-5 mt-auto">
                            <img src={firebaseLogo} alt="Firebase logo" className="w-3/4 mx-auto"/>
                        </div>
                        <p className="text-center text-xl m-auto">Firebase</p>
                    </div>
                    <div className="bg-black h-32 w-32 lg:h-44 lg:w-44 m-3 lg:m-5 xl:m-10 flex flex-col">
                        <div className="px-5 mt-auto">
                            <img src={mongoDBLogo} alt="MongoDB logo" className="w-3/4 mx-auto"/>
                        </div>
                        <p className="text-center text-xl m-auto">MongoDB</p>
                    </div>
                </div>
                <div className="flex py-5">
                    <button className="mx-auto">Voir toutes mes compétences <i class="fa-light fa-arrow-right ml-3 text-lg"></i></button>
                </div>
            </div>

        </>
    );
};

export default Technologies;