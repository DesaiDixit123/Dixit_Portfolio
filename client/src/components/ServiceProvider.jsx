import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        category: "Development",
        title: "Website Development",
        description:
            "Expert in website development, creating responsive and visually appealing sites, integrating cutting-edge technologies for optimal performance and user engagement.",
    },
    {
        id: "02",
        category: "Security / Secure",
        title: "Secure Software Development",
        description:
            "Ensuring secure software development with robust coding practices, rigorous testing, and continuous monitoring to safeguard against potential vulnerabilities and threats.",
    },
    {
        id: "03",
        category: "UI/UX Design",
        title: "Web UI/UX Design",
        description:
            "Designing compelling and user-centric web interfaces, prioritizing seamless navigation, and enhancing user experience through intuitive and visually appealing elements.",
    },
    {
        id: "04",
        category: "Web Design",
        title: "Application Design",
        description:
            "Crafting intuitive application designs, focusing on user experience, and implementing innovative solutions for a seamless and engaging user interaction.",
    },
    {
        id: "05",
        category: "SEO Analytics",
        title: "Digital Marketing",
        description:
            "Strategize digital marketing, optimize SEO for enhanced online visibility, and drive results with data-driven techniques to boost web presence.",
    },
];

export default function ServicesProvider() {
    return (
        <div className="px-[50px] py-[30px]">
            <div className="text-center text-[25px]">
                <h1>Services That I Provide</h1>
            </div>

            <div className="px-[0] text-[50px] font-bold flex justify-center text-gray-800">
                <h1 className="flex flex-col">
                    My Special Service For Your Business <span className="text-center">Development</span>
                </h1>
            </div>

            <div className="mt-10 space-y-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="group flex justify-between items-center border-t-2 border-black py-6 hover:border-blue-300 transition-all duration-300"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-start">
                            <p className="text-gray-500 text-xl mr-4">{service.id}</p>
                            <div className="w-[300px]">
                                <p className="font-semibold">{service.category}</p>
                                <h2 className="text-2xl font-bold group-hover:text-blue-600">
                                    {service.title}
                                </h2>
                            </div>
                        </div>
                        <div className="w-1/2 text-gray-600">{service.description}</div>
                        <button className="bg-blue-600 p-3 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L19.5 10.5M19.5 10.5L13.5 16.5M19.5 10.5H4.5"
                                />
                            </svg>
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
