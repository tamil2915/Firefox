import "./navbar.scss"
import logo from "../images/logo/logo.svg"

export default function Navbar(){

    return (
        <nav className="navbar bottom-shadow">
            <div className="nav-logo">
                <img src={logo} alt="logo-image" />
            </div>
            <a class="nav-links">Firefox browsers</a>
            <a class="nav-links">Products</a>
            <a class="nav-links">Who We Are</a>
            <a class="nav-links nav-innovation">Innovation</a>
            <a class="nav-links nav-dwnld-btn">Download Firefox</a>
        </nav>
    );
}