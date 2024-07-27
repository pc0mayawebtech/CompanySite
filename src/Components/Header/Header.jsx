import './Header.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Header = () => {
    const navRef = useRef(null);
    const toggleRef = useRef(null)

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("responsive_nav");
        }
        if(toggleRef.current) {
            toggleRef.current.classList.toggle("hideMenuBar");
        }
    };
    return (
        <header className='NavBar'>
            <div className="container navContainer">
                <nav className='NavItems'>
                    <label className='logo'>
                        Fin<span className='innercont'>Logic</span>
                    </label>
                    <ul className='NavMenu' ref={navRef}>
                        <li><Link to="/" className='NavMenuList' onClick={showNavbar}>Home</Link></li>
                        <li><Link to="service" className='NavMenuList' onClick={showNavbar}>Services</Link></li>
                        <li><Link to="about" className='NavMenuList' onClick={showNavbar}>About</Link></li>
                        <li><Link to="contact" className='NavMenuList' onClick={showNavbar}>Contact</Link></li>
                        <li><Link to="tel:+918373976489" className='NavMenuLists' onClick={showNavbar}>
                            <span className='ReachUs'>Talk To Us</span></Link>
                        </li>
                        <label className='icon crossicon' onClick={showNavbar}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </label>
                    </ul>
                    <label ref={toggleRef} className='icon hamburger' onClick={showNavbar}>
                        <i className="fa-solid fa-bars fa-xl"></i>
                    </label>
                </nav>
            </div>
        </header>
    );
};

export default Header;
