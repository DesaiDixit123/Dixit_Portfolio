import { useState } from "react";
import personal_info from "../assets/personal-infothumb.png";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function ExtraInfo() {
    // State to track the active section
    const [activeSection, setActiveSection] = useState("about");

    const sectionContent = {
        about: (
            <>
                <div className="text-[40px] font-bold">
                    <h1>About Me</h1>
                </div>
                <div className="text-[20px] pt-[15px]">
                    <p>I am Dixit Desai, a passionate Full Stack Developer with over 1+ year of experience in web development. I specialize in building dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
                </div>
                {/* Add About specific details */}
                <div className="py-[40px] grid grid-cols-2 gap-5">
                    <div className="group bg-white w-[270px] h-[120px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386]">
                        <h3 className="font-bold text-[20px] text-black group-hover:text-white transition-all duration-300">Email</h3>
                        <NavLink>

                            <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">dixitdesai809@gmail.com</p>
                        </NavLink>
                    </div>
                    <div className="group bg-white w-[270px] h-[120px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386]">
                        <h3 className="font-bold text-[20px] text-black group-hover:text-white transition-all duration-300">Phone</h3>
                        <NavLink>

                            <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">+91 9737080195</p>
                        </NavLink>
                    </div>
                    <div className="group bg-white w-[270px] h-[120px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386]">
                        <h3 className="font-bold text-[20px] text-black group-hover:text-white transition-all duration-300">Address</h3>

                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">Ahmedabad, Gujarat</p>
                    </div>
                    <div className="group bg-white w-[270px] h-[120px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386]">
                        <h3 className="text-[20px] font-semibold mb-3 group-hover:text-white">Follow Me</h3>
                        <div className="flex gap-5 group">
                            <a href="https://www.linkedi
n.com/in/dixit-
desai-b636072a5/" target="_blank" rel="noopener noreferrer" className="text-[#2A3386] text-[30px] group-hover:text-white">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/dixit_official_0503/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] text-[30px] group-hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="https://github.com/DesaiDixit123/" target="_blank" rel="noopener noreferrer" className="text-black text-[30px] group-hover:text-white">
                                <FaGithub />
                            </a>
                            <a href="https://www.facebook.com/dixit.desai.9822?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] text-[30px] group-hover:text-white">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>
            </>
        ),
        experience: (
            <>
                <div className="text-[40px] font-bold">
                    <h1>Experience</h1>
                </div>
                <div className="text-[20px] pt-[15px]">
                    <p> Dixit Desai has 1+ year of experience in web development. Currently, he is a Web Developer Intern at Cybernet IT Solution and previously interned at Coding Cloud, working on MERN stack projects, REST APIs, and responsive web applications.</p>
                </div>
                {/* Add Experience specific details */}
                <div className="py-[40px] grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Coding Cloud Internship (1/1/2024 to 1/7/2024) */}
                    <div className="group bg-white w-[310] h-[220px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386]">
                        <h3 className="font-bold text-[20px] text-black group-hover:text-white transition-all duration-300">Coding Cloud Internship <br /> (1/1/2024 - 1/7/2024)</h3>
                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">Worked on full-stack MERN projects, developed REST APIs, and built responsive web applications.</p>
                    </div>

                    {/* Cybernet IT Solution (Full-time, 1/8/2024 - Present) */}
                    <div className="group bg-white w-[310px] h-[220px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386]">
                        <h3 className="font-bold text-[20px] text-black group-hover:text-white transition-all duration-300">Cybernet IT Solution (Full-time, 1/8/2024 - Present)</h3>
                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">Currently enhancing skills in MERN stack and web application development, working on complex projects.</p>
                    </div>
                </div>

            </>
        ),
        education: (
            <>
                <div className="text-[40px] font-bold">
                    <h1>Education</h1>
                </div>
                <div className="text-[20px] pt-[15px]">
                    <p>Here's a brief overview of my education background:</p>
                </div>

                <div className="py-[40px] grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* 10th Education */}
                    <div className="group bg-white w-[300px] h-[210px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386] pt-[10px]">
                        <h3 className="font-bold text-[20px] text-black group-hover:text-white transition-all duration-300">10th (GHSEB) <br /> Gujarat Secondary and Higher Secondary Education Board</h3>
                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">Year : 2018 - 2019</p>
                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">Marks: 63%</p>
                    </div>

                    {/* 12th Education */}
                    <div className="group bg-white w-[300px] h-[210px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386]">
                        <h3 className="font-bold text-[20px] text-black group-hover:text-white transition-all duration-300">12th (GHSEB) <br /> Gujarat Secondary and Higher Secondary Education Board</h3>
                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">Year : 2020 - 2021</p>
                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">Marks: 63%</p>
                    </div>

                    {/* BCA Education */}
                    <div className="group bg-white w-[300px] h-[210px] flex flex-col justify-center px-[30px] rounded-[10px] border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-[2px] transition-all duration-300 hover:shadow-[0px_0px_10px_4px_#2A3386]">
                        <h3 className="font-bold text-[20px] text-black group-hover:text-white transition-all duration-300">BCA (GTU) <br />Gujarat Technological University</h3>
                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">Year : 2021 - 2024</p>
                        <p className="pt-[10px] text-black group-hover:text-white transition-all duration-300">CGPA: 7.20</p>
                    </div>
                </div>
            </>
        ),

        skills: (
            <>
                <div className="text-[40px] font-bold">
                    <h1>Skills</h1>
                </div>
                <div className="text-[20px] pt-[15px]">
                    <p className="flex">
                        <span className="text-[30px] pr-[20px]"><FaArrowRight className="text-blue-900" /></span>
                        <span>I have developed a strong skill set in various web development technologies. I am proficient in JavaScript, React, and Node.js for creating dynamic and responsive web applications. I am well-versed in using MongoDB for efficient database management. Additionally, I have experience working with Express.js to build RESTful APIs. I am also comfortable with using version control tools like Git for collaboration and code management.
                        </span> </p>
                    <br />
                    <p className="flex">
                        <span className="text-[30px] pr-[20px]"><FaArrowRight className="text-blue-900" /></span><span>
                            My expertise extends to working with frontend frameworks like Tailwind CSS and Bootstrap for responsive design. I have hands-on experience with cloud services like Cloudinary and AWS for image and file storage, as well as handling user authentication and authorization using JWT and OAuth. I am also familiar with tools like Postman for API testing and debugging.</span>

                    </p>
                    <br />
                    <p className="flex">
                        <span className="text-[30px] pr-[20px]"><FaArrowRight className="text-blue-900" /></span> <span>

                            Furthermore, I have experience with deployment and continuous integration using services like Heroku and Netlify. I am constantly learning and keeping up with the latest trends and best practices in web development to build scalable and optimized applications.
                        </span>
                    </p>
                </div>
            </>
        )

    };

    return (
        <>
            <div className="h-[full] py-[50px]">

                <div className="flex justify-center py-[30px] gap-[40px]  ">
                    {['about', 'experience', 'education', 'skills'].map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`w-[180px] text-[20px] font-semibold rounded-[14px] h-[50px] flex justify-center items-center transition-all duration-300 ${activeSection === section
                                ? "bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white"
                                : "bg-[#F7F7F7] text-black hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] hover:text-white"
                                }`}
                        >
                            {section.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 px-[80px] py-[50px]">
                    <div>
                        <img src={personal_info} alt="Personal Info" />
                    </div>

                    <div className="pt-[20px]">
                        {sectionContent[activeSection]}
                        <div className="py-[40px] grid grid-cols-2 gap-5">
                            {/* Follow Me Section */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
