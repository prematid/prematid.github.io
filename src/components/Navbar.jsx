import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [selected, setSelected] = useState('home'); // Default selected section

    return (
        <motion.nav
            className="fixed top-0 w-full bg-gradient-to-r from-pink-100 to-orange-50 shadow-md z-50 p-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ul className="flex justify-around">
                <li>
                    <Link
                        className={`text-center text-xl font-bold mb-8 tracking-wider ${selected === 'home' ? 'text-gray-900' : 'text-gray-700'}`}
                        to="hero"
                        smooth={true}
                        duration={500}
                        onClick={() => setSelected('home')}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`text-xl font-bold mb-8 tracking-wider ${selected === 'about' ? 'text-gray-900' : 'text-gray-700'}`}
                        to="about"
                        smooth={true}
                        duration={500}
                        onClick={() => setSelected('about')}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={`text-xl font-bold mb-8 tracking-wider ${selected === 'projects' ? 'text-gray-900' : 'text-gray-700'}`}
                        to="projects"
                        smooth={true}
                        duration={500}
                        onClick={() => setSelected('projects')}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        className={`text-xl font-bold mb-8 tracking-wider ${selected === 'contact' ? 'text-gray-900' : 'text-gray-700'}`}
                        to="contact"
                        smooth={true}
                        duration={500}
                        onClick={() => setSelected('contact')}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;


// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//     return (
//     <motion.nav
//         className="fixed top-0 w-full bg-gradient-to-r from-pink-100 to-orange-50 shadow-md z-50 p-4"
//         initial={{ y: -50 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//     >
//     <ul className="flex justify-around">
//         <li><Link className= "text-center text-xl font-bold mb-8 tracking-wider" to="hero" smooth={true} duration={500}>Home</Link></li>
//         <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//         <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
//         <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
//     </ul>
//     </motion.nav>
//     );
// };

// export default Navbar;
