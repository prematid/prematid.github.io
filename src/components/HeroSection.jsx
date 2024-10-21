import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';

const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
        >
            <h1 className="text-4xl mb-4">
            <Typewriter
                words={['Hello, I am Prem.', 'Backend Developer']}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
            </h1>
            <Link to="projects" smooth={true} duration={500}>
                <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-6 px-6 py-2 bg-white text-black rounded-full"
                >
                View My Work
                </motion.button>
            </Link>
        </motion.div>
        </section>
    );
};

export default HeroSection;