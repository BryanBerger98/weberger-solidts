import { Component, splitProps, For } from "solid-js";

const SkillsGroup: Component<{title: {text: string, color: string}, icon: string, skills: {skillName: string, skillImageUrl: string}[]}> = (props) => {

    const [local, others] = splitProps(props, ['title', 'icon', 'skills']);

    return(
            <div className="bg-black p-5 mx-2 lg:m-5">
                <h3 className="text-2xl" style={'color:' + local.title.color}>
                    <i className={local.icon}></i>
                    <span className="ml-3">{ local.title.text }</span>
                </h3>
                <div className="flex py-5 lg:py-0">
                    <For each={local.skills}>
                        {(skill) => (
                            <div className="m-auto h-20 w-20 lg:h-28 lg:w-28 lg:m-5 xl:m-10 flex flex-col">
                                <div className="mt-auto p-1">
                                    <img src={skill.skillImageUrl} alt={skill.skillName + ' logo'} className="w-3/4 mx-auto"/>
                                </div>
                                <p className="text-center lg:text-xl mt-auto">{skill.skillName}</p>
                            </div>
                        )}
                    </For>
                </div>
            </div>
    );

}

export default SkillsGroup;