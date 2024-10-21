
// src/components/Projects.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const projects = [
    { title: 'Blogging WebSite', description: 'A blogging website', link: 'https://zimpler.in', cta: 'Visit Website' },
    { title: 'Realtime Chat App', description: 'A real-time chat application implemented with React, Golang & firestore', link: 'https://chat.zimpler.in', cta: 'Visit Website' },
    { title: 'Online Games', description: 'Online games with leaderboard', link: 'https://chat.zimpler.in/games', cta: 'Visit Website' },
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ rotateY: 10, scale: 1.05 }}
            className="relative p-6 bg-gradient-to-r from-pink-100 to-orange-50 rounded-lg shadow-lg transition-transform duration-300 max-w-sm mx-auto"
        >
            <div className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
                {/* {project?.image && (
                    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                )} */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project?.title}</h3>
                <p className="text-gray-600 mb-4">{project?.description}</p>
                <a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors duration-300"
                >
                    {project?.cta || "View"}
                </a>
            </div>
        </motion.div>
    );
};

// Add PropTypes validation for 'project'
ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        cta: PropTypes.string,
    }).isRequired,
};

const Projects = () => {
    return (
    <section id="projects" className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
        <h2 className="text-center text-4xl font-bold text-white mb-8 tracking-wider">
        Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
                    <div key={project.title} className="flex justify-center">
                        <ProjectCard project={project} />
                    </div>
        ))}
        </div>
    </section>
    );
};

export default Projects;
