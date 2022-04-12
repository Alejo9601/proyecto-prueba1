import logo from "../assets/icons/LogoCimacode.png";
import "../styles/navbar.css";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useMobileObserver from "../hooks/useMobileObserver";
import useScrollObserver from "../hooks/useScrollObserver";

const Header = () => {
  const isMobile = useMobileObserver();
  const isScrolled = useScrollObserver();

  return (
    <header>
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
