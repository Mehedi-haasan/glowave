import { useState } from "react";

const Accordion = () => {
    const accordionData = [
        {
            id: 1,
            title: "What skin types are your products suitable for?",
            content: "Our products are formulated to be safe and effective for all skin types, including sensitive, oily, dry, and combination skin. Each product description specifies the best skin types for optimal results, but we recommend doing a patch test before use.",
        },
        {
            id: 2,
            title: "Does it come in other colors?",
            content:
                "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
        },
        {
            id: 3,
            title: "What is your return policy?",
            content:
                "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {accordionData.map((item, index) => (
                <div key={item.id} className="bg-[#F9F9F9] rounded-lg m-2 px-3">
                    <button onClick={() => toggleAccordion(index)} className="w-full flex justify-between items-center py-5 text-slate-800">
                        <span>{item.title}</span>
                        <span className={`text-slate-800 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                            {activeIndex === index ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            )}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-[500px]" : "max-h-0"
                            }`}
                    >
                        <div className="pb-5 text-sm text-slate-500">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
