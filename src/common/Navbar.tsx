import { Link } from "solid-app-router";
import { Component, onMount, Show } from "solid-js";

const Navbar: Component = () => {

    let navbar: any;
    let mobileMenu: any;
    let menuToggled = false;
    
    const onToggleMobileMenu = () => {
        const classList = mobileMenu.className.split(' ');
        const hiddenIndex = classList.findIndex((el: string) => el === 'hidden');
        const shownIndex = classList.findIndex((el: string) => el === 'flex');
        if (hiddenIndex >= 0) {
            classList.splice(hiddenIndex, 1);
            classList.push('flex');
            menuToggled = true;
            if (window.scrollY <= 30) {
               navbar.className = 'transform duration-150 p-7 flex fixed flex-col md:flex-row bg-zinc-900 top-0 left-0 right-0 z-50 drop-shadow-xl';
            }
        } else if (shownIndex >= 0) {
            classList.splice(shownIndex, 1);
            classList.push('hidden');
            menuToggled = false;
            if (window.scrollY <= 30) {
                navbar.className = 'transform duration-150 p-7 flex fixed flex-col md:flex-row bg-zinc-900 top-0 left-0 right-0 z-50';
            }
        }
        mobileMenu.className = classList.join(' ');
    }
    
    onMount(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.className = 'transform duration-150 p-7 flex fixed flex-col md:flex-row bg-zinc-900 top-0 left-0 right-0 z-50 drop-shadow-xl';
            } else {
                navbar.className = 'transform duration-150 p-7 flex fixed flex-col md:flex-row bg-zinc-900 top-0 left-0 right-0 z-50';
            }
        });

    });

    return(
        <nav ref={navbar} class="transform duration-150 p-7 flex flex-col md:flex-row fixed bg-zinc-900 top-0 left-0 right-0 z-50">
            <div class="flex w-full md:w-auto">
                <Link href="/" className="text-amber-400 text-3xl font-raleway font-thin" onclick={onToggleMobileMenu}>
                    WeBerger
                </Link>
                <button type="button" className="ml-auto my-auto md:hidden text-2xl" aria-expanded="false" onclick={onToggleMobileMenu}>
                    <Show when={!menuToggled}>
                        <i class="fa-light fa-bars"></i>
                    </Show>
                    <Show when={menuToggled}>
                        <i class="fa-light fa-times"></i>
                    </Show>
                </button>
            </div>
            <div className="flex md:ml-auto flex-col">
                <ul className="transform duration-150 w-fill list-none hidden md:flex flex-col md:flex-row md:w-auto md:ml-auto my-auto bg-zinc-900 p-5 md:p-0" ref={mobileMenu}>
                    <li className="px-2 md:my-auto font-light text-lg">
                        <Link href="/projects" onclick={onToggleMobileMenu}>
                            Projets
                        </Link>
                    </li>
                    {/* <li className="px-2 md:my-auto font-light text-lg">Mon parcours</li> */}
                    <li className="px-2 md:my-auto font-light text-lg">
                        <Link href="https://www.linkedin.com/in/bryanbrg/" target="_blank">Travailler ensemble</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default Navbar;