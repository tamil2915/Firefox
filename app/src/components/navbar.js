import "./navbar.css"
import logo from "../images/logo/logo.svg"

export default function Navbar(){

    return (
        <div className="navbar bottom-shadow">
            <div className="navbar-logo">
                <img src={logo} alt="logo-image" />
            </div>
        </div>
    );
}