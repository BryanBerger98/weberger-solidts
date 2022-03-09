import { Link } from "solid-app-router";
import { Component } from "solid-js";

const Footer: Component = () => {

    return(
        <footer className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 lg:pt-10 pb-20">
            <div className="px-5 md:px-0">
                <h2 className="text-4xl font-bold flex flex-col mb-3">
                    <span>Restons</span>
                    <span>connectés</span>
                </h2>
                <hr className="border-0 bg-white h-0.5 mb-5 w-full lg:w-3/4" />
                <p className="text-xl">© 2022 WeBerger - <Link href="/terms" className="text-amber-400 hover:underline">Mentions légales</Link></p>
            </div>
            <div className="flex">
                <nav class="mx-auto md:mr-0 md:ml-auto pt-10 md:pt-0">
                    <ul className="list-none flex flex-col">
                        <li className="text-3xl">
                            <Link href="https://www.linkedin.com/in/bryanbrg/" target="_blank">LinkedIn</Link>
                        </li>
                        <li className="text-3xl">
                            <Link href="https://github.com/BryanBerger98" target="_blank">
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <hr className="border-0 h-px bg-white my-3"/>
                        </li>
                        <li className="text-3xl hover:cursor-pointer" onclick={() => window.location.href = 'mailto:contact@weberger.net'}>
                            contact@weberger.net
                        </li>
                        {/* <li className="text-3xl">Instagram</li>
                        <li className="text-3xl">YouTube</li> */}
                    </ul>
                </nav>
            </div>
        </footer>
    );

}

export default Footer;