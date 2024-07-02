import { useRef, useEffect,useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate(); 

    const navRef = useRef(null);

    const [isSticky, setSticky] = useState(true);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const [navBackground, setNavBackground] = useState("rgba(17, 111, 158, 1)");

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setSticky(true);
            setNavBackground("rgba(17, 111, 158, 0.9)");
            
        } else {
            setSticky(true);
            setNavBackground("#116f9e");
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const routeChange = () =>{ 
        let path = `/project_page`; 
        navigate(path);
        showNavbar();
    }

    return (
        <header className={`${isSticky ? "sticky" : ""}`} style={{ backgroundColor: navBackground }}>
            <a style={{ textDecoration: 'none',
                        color: 'white'}} href="/">YIK PING</a>
            <nav ref={navRef}>
                <a href="/"  onClick={showNavbar}>Home</a>
                <a href="#aboutme" onClick={showNavbar}>About Me</a>
                <button className="project-button" onClick={routeChange} >Projects</button>
                <a href="#contact" onClick={showNavbar}>Contact</a>
                <a href="https://docs.google.com/document/d/10vh3ObKehpF2hn8bYOfPAGro69CgWbWPmkkoxgMFN8s/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;