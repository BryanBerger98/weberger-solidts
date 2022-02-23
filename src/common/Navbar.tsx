import { Link } from "solid-app-router";
import { Component } from "solid-js";

const Navbar: Component = () => {

    return(
        <>
            <nav class="p-7 flex">
                <a href="" class="text-amber-400 text-3xl font-raleway font-thin">WeBerger</a>
                <ul class="list-none flex ml-auto my-auto">
                    <li class="px-2 my-auto font-thin">
                        <Link href="/">
                            Projets
                        </Link>
                    </li>
                    <li class="px-2 my-auto font-thin">Mon parcours</li>
                    <li class="px-2 my-auto font-thin">Travailler ensemble</li>
                </ul>
            </nav>
        </>
    );

}

export default Navbar;