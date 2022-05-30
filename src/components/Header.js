import logo from "../assets/icons/Logo.png";
import "../styles/navbar.css";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useMobileObserver from "../hooks/useMobileObserver";
import useScrollObserver from "../hooks/useScrollObserver";
import { useRef } from "react";

const Header = () => {
  const headerRef = useRef();
  const isMobile = useMobileObserver();
  const isScrolled = useScrollObserver(
    headerRef.current ? headerRef.current.clientHeight : 0
  );

  return (
    <header ref={headerRef}>
      <nav
        className={`flex-container ${isScrolled ? "navbar active" : "navbar"}`}
      >
        <div className="logo">
          <img src={logo} id="logo" alt="logo" />
        </div>
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </nav>
    </header>
  );
};

export default Header;
