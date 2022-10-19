import "./Intro.scss"
import firefoxLogo from "../images/firefox-logo.png"
import browserContent from "../images/browser-content.png"

export default function Intro(){

    return(
        <section class="intro-section">
            <IntroLeft />
            <IntroRight />
        </section>
    );
} 

const IntroLeft = function(){
    return (
        <div class="intro-panes intro-left ">
            <div class="left-title">
                <img src={firefoxLogo} width={50} height={50} />
                <h1>Firefox <span>Browser</span></h1>
            </div>
            <h2 class="left-subtitle">Get the browser that protects what's important</h2>
            <p class="left-subpara">No shady privacy policies or back doors for advertisers. Just a lightning fast browser that doesn’t sell you out.</p>
            <div class="links-wrapper">
                <a class="dwn-btn links">Download Firefox</a>
                <a class="links">Firefox Privacy Notice</a>
                <a class="links">Download options and other languages</a>
                <a class="links">Firefox Browser support</a>
            </div>
        </div>
    );
}

const IntroRight = function(){
    return(
        <div class="intro-panes intro-right">
            <div class="bg-beans-wrapper">
                <div class="bean bean-4"></div>
                <div class="bean bean-1"></div>
                <div class="bean bean-2"></div>
                <div class="bean bean-3"></div>
            </div>
            <div class="floating-screen">
                <img class="brow-img" src={browserContent} />
            </div>
        </div>
    );
}