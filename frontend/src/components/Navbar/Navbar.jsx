import "./navbar.css"
import React, { useState } from "react"
import { assets } from "../../assets/assets.js"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        // Reset dropdowns when opening/closing menu
        setToolsOpen(false);
        setResourcesOpen(false);
    };

    const toggleTools = (e) => {
        if (window.innerWidth <= 992) {
            e.stopPropagation();
            setToolsOpen(!toolsOpen);
            setResourcesOpen(false);
        }
    };

    const toggleResources = (e) => {
        if (window.innerWidth <= 992) {
            e.stopPropagation();
            setResourcesOpen(!resourcesOpen);
            setToolsOpen(false);
        }
    };

    // Close mobile menu on resize to desktop
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setMobileMenuOpen(false);
                setToolsOpen(false);
                setResourcesOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <nav id="navbar">
                {/* Mobile Backdrop Overlay */}
                <div
                    className={`mobileOverlay ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                ></div>

                <div className="navMain">
                    <a href="#heroSection">
                        <img id="logo" src={assets.logo} alt="no img" />
                    </a>

                    <div className={`navListContainer ${mobileMenuOpen ? 'active' : ''}`}>
                        <div className="mobileMenuHeader">

                            <div className="mobileMenuClose" onClick={() => setMobileMenuOpen(false)}>

                            </div>
                        </div>

                        <div className={`dropDownListContainer dropDownListContTools ${toolsOpen ? 'open' : ''}`}>
                            <li className="navUlLi arrLi arrLiTools" onClick={toggleTools}>
                                <p>Tools</p>
                                <KeyboardArrowDownIcon className={`arrowIcon ${toolsOpen ? 'rotated' : ''}`} />
                            </li>
                            <div className="liListsCon liListContTools">
                                <p onClick={() => setMobileMenuOpen(false)}>Community</p>
                                <p onClick={() => setMobileMenuOpen(false)}>Blogs</p>
                                <p onClick={() => setMobileMenuOpen(false)}>Documentation</p>
                            </div>
                        </div>
                        <div className={`dropDownListContainer dropDownListContRes ${resourcesOpen ? 'open' : ''}`}>
                            <li className="navUlLi arrLi arrLiResources" onClick={toggleResources}>
                                <p>Resources</p>
                                <KeyboardArrowDownIcon className={`arrowIcon ${resourcesOpen ? 'rotated' : ''}`} />
                            </li>
                            <div className="liListsCon liListContReso">
                                <p onClick={() => setMobileMenuOpen(false)}>Community</p>
                                <p onClick={() => setMobileMenuOpen(false)}>Blogs</p>
                                <p onClick={() => setMobileMenuOpen(false)}>Documentation</p>
                            </div>
                        </div>
                        <li className="navUlLi" onClick={() => setMobileMenuOpen(false)}>
                            <p>Pricing</p>
                        </li>
                        <li className="navUlLi" onClick={() => setMobileMenuOpen(false)}>
                            <p>About</p>
                        </li>
                        <li className="navUlLi" onClick={() => setMobileMenuOpen(false)}>
                            <p>Support</p>
                        </li>

                        {/* Mobile-only profile buttons inside the menu */}
                        <div className="mobileProfileBtn">
                            <button className="loginBtn" onClick={() => setMobileMenuOpen(false)}>Login</button>
                            <button className="getStartBtn" onClick={() => setMobileMenuOpen(false)}>
                                <p>Get Started</p>
                                <HiOutlineArrowLongRight className="getStartIcon" />
                            </button>
                        </div>
                    </div>

                    <div className="profileBtn desktopOnly">
                        <button className="loginBtn">Login</button>
                        <button className="getStartBtn">
                            <p>Get Started</p>
                            <HiOutlineArrowLongRight className="getStartIcon" />
                        </button>
                    </div>

                    <div className="mobileMenuToggle" onClick={toggleMobileMenu}>
                        <MenuIcon />
                    </div>
                </div>
                <hr className="navBorder" />
            </nav>
        </>
    )
}
