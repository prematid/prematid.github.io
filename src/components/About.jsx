// import { motion } from 'framer-motion';

// const About = () => {
//     return (
//     <section id="about" className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-center">
//         <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl mx-auto"
//         >
//         {/* <h2 className="text-3xl mb-8">About Me</h2> */}
//         <h2 className="text-center text-4xl font-bold text-white mb-8 tracking-wider">
//             About Me
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//             <h3>Professional Journey</h3>
//             {/* Add timeline here */}
//             </div>
//             <div>
//             <h3>Skills</h3>
//             <p>Go, MySQL, Google Play Billing API, Cloud Technologies</p>
//             </div>
//         </div>
//         </motion.div>
//     </section>
//     );
// };

// export default About;

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-center text-4xl font-bold text-white mb-8 tracking-wider">
                    About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-pink-100 to-orange-50 text-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Professional Journey</h3>
                        <div className="relative border-l border-gray-300">
                            {/* Example of a timeline item */}
                            <div className="mb-4">
                                <div className="absolute left-[-12px] top-0 bg-indigo-600 h-4 w-4 rounded-full"></div>
                                <h4 className="font-bold">Backend Engineer</h4>
                                <p className="text-gray-600">Bobble AI | 3.5 Years</p>
                                <p>Software Developer at Bobble.ai | Server-Side Engineering | Golang & React</p>
                            </div>
                            {/* Repeat the above div for more timeline items */}
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-100 to-orange-50 text-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Go", "MySQL", "Google Play Billing API", "Cloud Technologies"].map(skill => (
                                <span key={skill} className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;