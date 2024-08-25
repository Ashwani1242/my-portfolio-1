import React from "react";

const ProjectCard = ({ card }) => {
    return (
        <div className="space-y-4 cursor-pointer" onClick={() => openLink(card.link)}>
            <div
                key={card.id}
                className="relative h-96 w-72 sm:h-[480px] sm:w-[360px] overflow-hidden bg-neutral-200" >
                <div
                    style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 hover:scale-110" >
                    <div className="absolute inset-0 z-10 place-content-end">
                        <p className="sm:text-[30px] text-[22px] font-cormorant_upright font-semibold floralwhite bg-neutral-900/60 p-8 flex items-center justify-center backdrop-blur-lg">
                            {card.title}
                        </p>
                    </div>
                </div>
            </div>
            {/* <div
                className="text-nowrap text-xl font-bold flex space-x-4">
                {card.icons && card.icons.map((icon, index) => (
                    <button key={index} onClick={() => openLink(card.links[index])} className="flex items-center justify-center bg-white hover:scale-110 transition-all duration-300">
                        <img src={`/images/project_icons/${icon}.svg`} alt={icon} className="w-8 h-8" />
                    </button>
                ))}
            </div> */}
        </div>
    );
};

const openLink = (link) => {
    window.open(link, '_blank');
};

export default ProjectCard;