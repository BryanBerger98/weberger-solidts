import { Link } from "solid-app-router";
import { Component } from "solid-js";

const Footer: Component = () => {

    return(
        <footer className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 pt-10 pb-20">
            <div>
                <h2 className="text-4xl font-bold flex flex-col mb-3">
                    <span>Restons</span>
                    <span>connectés</span>
                </h2>
                <hr className="border-0 bg-white h-0.5 mb-5 w-3/4" />
                <p className="text-xl">© 2022 WeBerger</p>
            </div>
            <div className="flex">
                <nav class="ml-auto">
                    <ul className="list-none flex flex-col">
                        <li className="text-3xl">LinkedIn</li>
                        <li className="text-3xl">GitHub</li>
                        <li className="text-3xl">Instagram</li>
                        <li className="text-3xl">YouTube</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );

}

export default Footer;