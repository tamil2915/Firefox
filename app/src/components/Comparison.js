import "./common.scss"

export default function Comparison(){
    return(
        <>
        <div class="outer-wrapper">
            <div>
                <h1>Do what you do online.</h1>
                <h1>Firefox Browser isn't watching.</h1>
                <div>
                    <LeftContent />
                    <RightContent />
                </div>
            </div>
        </div>
        </>
    );
}

function LeftContent(){
    return(
        <>
            <h2>How Firefox compares to other browsers</h2>
            <p>Get all the speed and tools with none of the invasions of privacy. Firefox Browser collects so little data about you, we don’t even require your email address to download. That’s because unlike other browsers, we have no financial stake in following you around the web.</p>
            <a>How we compare to other browsers</a>
        </>
    );
}

function RightContent(){
    return(
        <>
            <h2>How Firefox compares to other browsers</h2>
            <p>Get all the speed and tools with none of the invasions of privacy. Firefox Browser collects so little data about you, we don’t even require your email address to download. That’s because unlike other browsers, we have no financial stake in following you around the web.</p>
            <a>How we compare to other browsers</a>
        </>
    );
}