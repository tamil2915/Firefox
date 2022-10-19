import styles from "./Features.module.scss"
import logo from "../images/firefox-logo.png"
import pipImg from "../images/icons/pip.svg"
import cycImg from "../images/icons/cyc.svg"
import elopImg from "../images/icons/elop.svg"



export default function FireFeatures()
{
    return(
        <div className={styles.outer}>
            <div className={styles.wrapper}>
                <h1>Latest Firefox features</h1>
                <Features />
                <a>See Release Notes</a>
            </div>
            <Decorations />
        </div>
    );

    
    function Features(){
        return(
            <div className={styles.InnerContent}>
                <InnerContent pic={pipImg} heading={"Picture-in-Picture"} para={"Pop a video out of the browser window so you can stream and multitask."}/>
                <InnerContent pic={cycImg} heading={"Choose your color"} para={"Personalize your experience with new colorways."}/>
                <InnerContent pic={elopImg} heading={"An extra layer of protection"} para={"DNS over HTTPS (DoH) helps keep internet service providers from selling your data."}/>
            </div>
        );
    }

    function InnerContent({pic, heading, para}){
        return(
            <div>
                <img src={pic} width={60} height={60}/>
                <h2>{heading}</h2>
                <p>{para}</p>
            </div>
        );
    }

    function Decorations(){
        return(
            <div className={styles.Decorations}>
                <div className={styles.circle}></div>
                <div className={styles.Dbean}></div>
                <div className={styles.HalfCircle}>
                </div>
            </div>
        );
    }
}
