import { Component, splitProps, For } from "solid-js";
import SkillsGroupInterface from "../interfaces/skills-group.interface";

const SkillsGroup: Component<{skillGroup: SkillsGroupInterface}> = (props) => {

    const [local, others] = splitProps(props, ['skillGroup']);

    return(
            <div className="bg-black p-5 mx-2 lg:m-5">
                <h3 className="text-2xl" style={'color:' + local.skillGroup.color}>
                    <i className={local.skillGroup.icon}></i>
                    <span className="ml-3">{ local.skillGroup.title }</span>
                </h3>
                <div className="flex py-5 lg:py-0">
                    <For each={local.skillGroup.skills}>
                        {(skill) => (
                            <div className="m-auto h-20 w-20 lg:h-28 lg:w-28 lg:m-5 xl:m-10 flex flex-col">
                                <div className="mt-auto p-1">
                                    <img src={skill.imageUrl} alt={skill.name + ' logo'} loading="lazy" className="w-3/4 mx-auto"/>
                                </div>
                                <p className="text-center lg:text-xl mt-auto">{skill.name}</p>
                            </div>
                        )}
                    </For>
                </div>
            </div>
    );

}

export default SkillsGroup;