// src/components/Contact.jsx
import { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const particleOptions = {
    fpsLimit: 60,
    particles: {
        color: { value: "#ffffff" },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: { enable: true },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: { enable: true, area: 800 },
            value: 150,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 3, max: 8 } },
    },
    detectRetina: true,
};

const Contact = () => {
    // const [loading, setLoading] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //         alert('Message Sent!');
    //     }, 2000);
    // };

    const particlesInit = useCallback(async (engine) => {
        console.log("Particles Engine Init");
        try {
            await loadSlim(engine);
        } catch (error) {
            console.error("Error loading particles:", error);
        }
    }, []);

    return (
        <section id="contact" className="relative py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
            <Particles
                className="absolute inset-0 z-1"
                id="tsparticles"
                init={particlesInit}
                options={particleOptions}
            />

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-4xl mx-auto px-4"
            >
                <h2 className="text-center text-4xl font-bold text-white mb-8 tracking-wider">
                    Contact Me
                </h2>
                <p className="text-center text-white text-lg mb-10">
                    Feel free to reach out for collaborations or just a friendly chat.
                </p>

                {/* Social Media Badges */}
                <div className="flex justify-center space-x-4 mb-6">
                    <a href="https://www.linkedin.com/in/premraj7" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/prematid" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
                        <FaGithub />
                    </a>
                    <a href="https://x.com/prem_atid" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
                        <FaTwitter />
                    </a>
                </div>

                {/* Contact Information */}
                <div className="text-center text-white mb-10">
                    <p className="text-lg font-semibold mb-2">
                        Phone: <span className="font-normal">(+91) 9304200424, 8409387098</span>
                    </p>
                    <p className="text-lg font-semibold">
                        Email: <span className="font-normal">prematid7@gmail.com</span>
                    </p>
                </div>

                {/* <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center bg-gradient-to-r from-pink-100 to-orange-50 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
                >
                    <motion.input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 mb-4 border bg-gradient-to-r from-pink-100 to-orange-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-gray-500"
                        whileFocus={{ scale: 1.02 }}
                        whileHover={{ scale: 1.02 }}
                    />
                    <motion.input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 mb-4 border bg-gradient-to-r from-pink-100 to-orange-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-gray-500"
                        whileFocus={{ scale: 1.02 }}
                        whileHover={{ scale: 1.02 }}
                    />
                    <motion.textarea
                        placeholder="Your Message"
                        className="w-full p-4 mb-6 border bg-gradient-to-r from-pink-100 to-orange-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-gray-500"
                        rows="4"
                        whileFocus={{ scale: 1.02 }}
                        whileHover={{ scale: 1.02 }}
                    ></motion.textarea>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        className="w-full p-3 text-white bg-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <svg
                                    className="animate-spin mr-2 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    ></path>
                                </svg>
                                Sending...
                            </div>
                        ) : (
                            "Send Message"
                        )}
                    </motion.button>
                </form> */}
            </motion.div>
        </section>
    );
};

export default Contact;










// // // src/components/Contact.jsx

// // src/components/Contact.jsx
// import { useState, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import Particles from '@tsparticles/react'; // Updated import
// // import { loadFull } from '@tsparticles/engine'; // Updated import
// import { loadSlim } from '@tsparticles/slim';
// // import { loadFull } from '@tsparticles/react'; 
// // import { loadFull } from "tsparticles";
// // import Particles from "react-tsparticles";

// // Background Particle Configuration
// const particleOptions = {
//     fpsLimit: 60,
//     particles: {
//         color: { value: "#ffffff" },
//         links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//         },
//         collisions: { enable: true },
//         move: {
//             direction: "none",
//             enable: true,
//             outModes: { default: "bounce" },
//             random: false,
//             speed: 2,
//             straight: false,
//         },
//         number: {
//             density: { enable: true, area: 800 },
//             value: 150,
//         },
//         opacity: { value: 0.5 },
//         shape: { type: "circle" },
//         size: { value: { min: 3, max: 8 } },
//     },
//     detectRetina: true,
// };

// const Contact = () => {
//     const [loading, setLoading] = useState(false);

//     // Handling form submission with a loading spinner
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false);
//             alert('Message Sent!');
//         }, 2000); // Simulate form submission time
//     };

//     // Load particles
//     // const particlesInit = useCallback(async (engine) => {
//     //     console.log("Particles Engine Init");
//     //     try {
//     //         await loadFull(engine);
//     //     } catch (error) {
//     //         console.error("Error loading particles:", error);
//     //     }
//     // }, []);

//     const particlesInit = useCallback(async (engine) => {
//         console.log("Particles Engine Init");
//         try {
//             await loadSlim(engine);
//         } catch (error) {
//             console.error("Error loading particles:", error);
//         }
//     }, []);


//     return (
//         <section id="contact" className="relative py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
//             {/* Particle Background */}
//             <Particles
//                 className="absolute inset-0 z-1"
//                 id="tsparticles"
//                 init={particlesInit}
//                 options={particleOptions}
//             />

//             {/* Form Content */}
//             <motion.div
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="relative z-10 max-w-4xl mx-auto px-4"
//             >
//                 <h2 className="text-center text-4xl font-bold text-white mb-8 tracking-wider">
//                     Contact Me
//                 </h2>
//                 <p className="text-center text-white text-lg mb-10">
//                     Feel free to reach out for collaborations or just a friendly chat.
//                 </p>

//                 <form
//                     onSubmit={handleSubmit}
//                     // className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
//                     className="flex flex-col items-center bg-gradient-to-r from-pink-100 to-orange-50 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
//                 >
//                     <motion.input
//                         type="text"
//                         placeholder="Name"
//                         className="w-full p-4 mb-4 border bg-gradient-to-r from-pink-100 to-orange-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-gray-500"
//                         whileFocus={{ scale: 1.02 }}
//                         whileHover={{ scale: 1.02 }}
//                     />
//                     <motion.input
//                         type="email"
//                         placeholder="Email"
//                         className="w-full p-4 mb-4 border bg-gradient-to-r from-pink-100 to-orange-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-gray-500"
//                         whileFocus={{ scale: 1.02 }}
//                         whileHover={{ scale: 1.02 }}
//                     />
//                     <motion.textarea
//                         placeholder="Your Message"
//                         className="w-full p-4 mb-6 border bg-gradient-to-r from-pink-100 to-orange-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-gray-500"
//                         rows="4"
//                         whileFocus={{ scale: 1.02 }}
//                         whileHover={{ scale: 1.02 }}
//                     ></motion.textarea>

//                     <motion.button
//                         type="submit"
//                         whileHover={{ scale: 1.05 }}
//                         className="w-full p-3 text-white bg-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <div className="flex justify-center items-center">
//                                 <svg
//                                     className="animate-spin mr-2 h-5 w-5 text-white"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <circle
//                                         className="opacity-25"
//                                         cx="12"
//                                         cy="12"
//                                         r="10"
//                                         stroke="currentColor"
//                                         strokeWidth="4"
//                                     ></circle>
//                                     <path
//                                         className="opacity-75"
//                                         fill="currentColor"
//                                         d="M4 12a8 8 0 018-8v8H4z"
//                                     ></path>
//                                 </svg>
//                                 Sending...
//                             </div>
//                         ) : (
//                             "Send Message"
//                         )}
//                     </motion.button>
//                 </form>
//             </motion.div>
//         </section>
//     );
// };

// export default Contact;








// import { useState, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";

// // Background Particle Configuration
// const particleOptions = {
//     fpsLimit: 60,
//     particles: {
//     color: {
//         value: "#ffffff",
//     },
//     links: {
//         color: "#ffffff",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//     },
//     collisions: {
//         enable: true,
//     },
//     move: {
//         direction: "none",
//         enable: true,
//         outModes: {
//         default: "bounce",
//         },
//         random: false,
//         speed: 2,
//         straight: false,
//     },
//     number: {
//         density: {
//         enable: true,
//         area: 800,
//         },
//         value: 80,
//     },
//     opacity: {
//         value: 0.5,
//     },
//     shape: {
//         type: "circle",
//     },
//     size: {
//         value: { min: 1, max: 5 },
//     },
//     },
//     detectRetina: true,
// };



// const Contact = () => {
//     const [loading, setLoading] = useState(false);

//     // Handling form submission with a loading spinner
//     const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//         setLoading(false);
//         alert('Message Sent!');
//     }, 2000); // Simulate form submission time
//     };

//     // Load particles
//     const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//     }, []);

//     return (
//         <section id="contact" className="relative py-20 bg-gray-900">
//         {/* Particle Background */}
//         <Particles
//             className="absolute inset-0 z-0"
//             id="tsparticles"
//             init={particlesInit}
//             options={particleOptions}
//         />

//         {/* Form Content */}
//         <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="relative z-10 max-w-4xl mx-auto px-4"
//         >
//             <h2 className="text-center text-4xl font-bold text-white mb-8 tracking-wider">
//             Contact Me
//             </h2>
//             <p className="text-center text-white text-lg mb-10">
//             Feel free to reach out for collaborations or just a friendly chat.
//             </p>

//             <form
//             onSubmit={handleSubmit}
//             className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
//             >
//             <motion.input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//                 whileFocus={{ scale: 1.02 }}
//                 whileHover={{ scale: 1.02 }}
//             />
//             <motion.input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//                 whileFocus={{ scale: 1.02 }}
//                 whileHover={{ scale: 1.02 }}
//             />
//             <motion.textarea
//                 placeholder="Your Message"
//                 className="w-full p-4 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//                 rows="4"
//                 whileFocus={{ scale: 1.02 }}
//                 whileHover={{ scale: 1.02 }}
//             ></motion.textarea>

//             <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.05 }}
//                 className="w-full p-3 text-white bg-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//                 disabled={loading}
//             >
//                 {loading ? (
//                 <div className="flex justify-center items-center">
//                     <svg
//                     className="animate-spin mr-2 h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     >
//                     <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                     ></circle>
//                     <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8H4z"
//                     ></path>
//                     </svg>
//                     Sending...
//                 </div>
//                 ) : (
//                 "Send Message"
//                 )}
//             </motion.button>
//             </form>
//         </motion.div>
//         </section>

//     // <section id="contact" className="relative py-20">
//     //     {/* Particle Background */}
//     //     <Particles className="absolute inset-0 z-0" init={particlesInit} options={particleOptions} />
        
//     //     {/* Content */}
//     //     <motion.div
//     //     initial={{ opacity: 0, y: 100 }}
//     //     whileInView={{ opacity: 1, y: 0 }}
//     //     transition={{ duration: 0.7 }}
//     //     className="relative z-10 max-w-4xl mx-auto px-4"
//     //     >
//     //     <h2 className="text-center text-4xl font-bold text-white mb-8 tracking-wider">
//     //         Contact Me
//     //     </h2>
//     //     <p className="text-center text-white text-lg mb-10">
//     //         Feel free to reach out for collaborations or just a friendly chat.
//     //     </p>
        
//     //     <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
//     //         <motion.input
//     //         type="text"
//     //         placeholder="Name"
//     //         className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//     //         whileFocus={{ scale: 1.02 }}
//     //         whileHover={{ scale: 1.02 }}
//     //         />
//     //         <motion.input
//     //         type="email"
//     //         placeholder="Email"
//     //         className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//     //         whileFocus={{ scale: 1.02 }}
//     //         whileHover={{ scale: 1.02 }}
//     //         />
//     //         <motion.textarea
//     //         placeholder="Your Message"
//     //         className="w-full p-4 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//     //         rows="4"
//     //         whileFocus={{ scale: 1.02 }}
//     //         whileHover={{ scale: 1.02 }}
//     //         ></motion.textarea>

//     //         <motion.button
//     //         type="submit"
//     //         whileHover={{ scale: 1.05 }}
//     //         className="w-full p-3 text-white bg-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//     //         disabled={loading}
//     //         >
//     //         {loading ? (
//     //             <div className="flex justify-center items-center">
//     //             <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//     //                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//     //                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
//     //             </svg>
//     //             Sending...
//     //             </div>
//     //         ) : (
//     //             "Send Message"
//     //         )}
//     //         </motion.button>
//     //     </form>
//     //     </motion.div>
//     // </section>
//     );
// };

// export default Contact;
