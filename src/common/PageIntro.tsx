import { Link } from "solid-app-router";
import { Component, Show, splitProps } from "solid-js";

const PageIntro: Component<{title: string, subtitle: string, image: string, firstParagraph?: string, secondParagraph?: string, button?: boolean, buttonName?: string, buttonLink?: string}> = (props) => {

    const [local, others] = splitProps(props, ['title', 'subtitle', 'image', 'firstParagraph', 'secondParagraph', 'button', 'buttonName', 'buttonLink']);

    return (
        <div className="container mx-auto my-10 md:my-20 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="my-auto order-last md:order-firt px-5 md:px-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-amber-400 font-medium">{local.title}</h1>
                    <h2 className="text-5xl md:text-4xl lg:text-5xl font-thin">{local.subtitle}</h2>
                    <hr className="bg-amber-400 h-0.5 border-0 w-2/3 my-5" />
                    <Show when={local.firstParagraph || local.secondParagraph}>
                        <p className="text-neutral-400 flex flex-col mb-5">
                            <Show when={local.firstParagraph}>
                                <span>
                                    {local.firstParagraph}
                                </span>
                            </Show>
                            <Show when={local.secondParagraph}>
                                <span>
                                    {local.secondParagraph}
                                </span>
                            </Show>
                        </p>
                    </Show>
                    <Show when={local.button}>
                        <Link href={local.buttonLink ? local.buttonLink : '/'} className="bg-black py-2 px-4">
                            <button type="button">
                                <span>{local.buttonName ? local.buttonName : 'Button'} <i className="fa-light fa-arrow-right ml-3 text-lg"></i></span>
                            </button>
                        </Link>
                    </Show>
                </div>
                <Show when={local.image} fallback={<div>No image</div>}>
                    <div className="relative mx-auto mb-5 md:mb-auto bg-gradient-to-t from-amber-grey to-amber-500 h-72 md:h-96 w-72 md:w-96 order-first md:order-last">
                        <img src={local.image} className="w-full absolute bottom-3 right-3" alt="Bryan BERGER" />
                    </div>
                </Show>
            </div>
        </div>
    );
};

export default PageIntro;