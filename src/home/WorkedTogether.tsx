import { Component } from "solid-js";
import codeInstroctorLogo from '../assets/code_instructor_logo.png';
import g2rLogo from '../assets/g2r_logo.png';
import konexioLogo from '../assets/konexio_logo_white.jpg';
import cfaAfiaLogo from '../assets/cfa_afia_logo.jpg';

const Technologies: Component = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <div className="flex">
                    <h2 className="mx-auto text-2xl md:text-4xl">
                        Nous avons travaillé <span className="text-amber-400">ensemble</span>
                        <hr className="border-0 h-px mb-8 lg:mb-16 w-1/2 bg-neutral-700" />
                    </h2>
                </div>
                <div className="flex justify-center flex-wrap">
                    <div className="bg-black h-32 w-32 lg:h-44 lg:w-44 m-3 lg:m-5 xl:m-10 flex flex-col">
                        <div className="px-5 mt-auto">
                            <img src={codeInstroctorLogo} alt="Angular logo" className="w-3/4 mx-auto"/>
                        </div>
                        <p className="text-center text-xl mt-auto mb-4">Code Instructor</p>
                    </div>
                    <div className="bg-black h-32 w-32 lg:h-44 lg:w-44 m-3 lg:m-5 xl:m-10 flex flex-col">
                        <div className="px-5 mt-auto">
                            <img src={g2rLogo} alt="Node JS logo" className="w-3/4 mx-auto"/>
                        </div>
                        <p className="text-center text-xl mt-auto mb-4">G2R Formations</p>
                    </div>
                    <div className="bg-black h-32 w-32 lg:h-44 lg:w-44 m-3 lg:m-5 xl:m-10 flex flex-col">
                        <div className="px-5 mt-auto">
                            <img src={konexioLogo} alt="Firebase logo" className="w-3/4 mx-auto"/>
                        </div>
                        <p className="text-center text-xl mt-auto mb-4">Konexio</p>
                    </div>
                    <div className="bg-black h-32 w-32 lg:h-44 lg:w-44 m-3 lg:m-5 xl:m-10 flex flex-col">
                        <div className="px-5 mt-auto">
                            <img src={cfaAfiaLogo} alt="MongoDB logo" className="w-3/4 mx-auto"/>
                        </div>
                        <p className="text-center text-xl mt-auto mb-4">CFA AFIA</p>
                    </div>
                </div>
                <div className="flex py-5">
                    <button className="mx-auto bg-amber-400 text-black py-2 px-4" type="button">Travailler ensemble <i class="fa-light fa-arrow-right ml-3 text-lg"></i></button>
                </div>
            </div>

        </>
    );
};

export default Technologies;