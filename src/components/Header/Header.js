import React, { useState } from 'react'
import './Header.css';
import { GoThreeBars, GoX } from 'react-icons/go';

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header>
           <nav className="navbar">
               <div className="logo">
                    <svg width="67" height="49" viewBox="0 0 37 19" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path id="jlogo" d="M15.6152 0L17.7128 4.74922L18.8936 7.86589L16.6692 6.97541L11.4511 18.1064H6.76659L0 10.8638H6.24608L8.98684 13.5632L15.6152 0Z" fill="#161616"/>
                    <path id="alogo" d="M26.6176 4.6626L20.8332 18.5H16.5319L24.5412 0.393616H28.8424L37 18.5H27.5076L25.876 14.6726H31.0672L26.6176 4.6626Z" fill="#161616"/>
                    </svg>
               </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <GoX fontSize="2.5em" /> : <GoThreeBars fontSize="2.5em" />}
                </div>
                <ul className={click ? 'navmenu active': 'navmenu'}>
                    <li className="nav-list"><a className="nav-links" href="#" onClick={closeMobileMenu}>About</a></li>
                    <li className="nav-list"><a className="nav-links" href="#" onClick={closeMobileMenu}>Skill</a></li>
                    <li className="nav-list"><a className="nav-links" href="#" onClick={closeMobileMenu}>Work</a></li>
                    <li className="nav-list"><a className="nav-links" href="#" onClick={closeMobileMenu}>Contact</a></li>
                    <li className="nav-list" style={{ backgroundImage: "url(/images/bg-resume.png)", backgroundRepeat: "no-repeat", backgroundPosition: "60% 30%"}} ><a className="nav-links" href="#" onClick={closeMobileMenu}>Resume</a></li>
                </ul>
           </nav>
        </header>
    )
}

export default Header
