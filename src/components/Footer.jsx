// src/components/Footer.jsx
const Footer = () => {
    return (
    <footer className="py-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center">
        <div>
        <a href="https://linkedin.com/in/premraj" className="mr-4 hover:underline">LinkedIn</a>
        <a href="https://github.com/premraj" className="hover:underline">GitHub</a>
        </div>
        <p className="mt-4">&copy; 2024 Prem Raj. All Rights Reserved.</p>
    </footer>
    );
};

export default Footer;