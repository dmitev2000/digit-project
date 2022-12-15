import React from "react";


const OurCoffee = () => {
    return (
        <div style={{maxWidth: '45%', margin: '0 auto', paddingTop: '150px', paddingBottom: '150px'}}>
            <h1><strong>OUR COFFEE</strong></h1>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78073.jpg"
                 style={{maxWidth: '800px', width: "100%", marginTop: "40px", marginBottom: "40px"}}></img>
            <h2><strong>Find your favorite at-home coffee</strong></h2>
            <p>From K-Cup pods to Starbucks® Premium Instant, we offer a wide selection of coffee to fill your cup.</p>

            <p>Still undecided? Our new Coffee Quiz makes it easy to find the Starbucks® coffee that's made to be yours.
                Just answer five questions to find the one.</p>

            <p> Exceptional coffees from around the world. Sourced for the season, roasted at Starbucks Reserve®
                Roasteries and crafted with care.
            </p>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71809.jpg"
                 style={{maxWidth: '800px', width: "100%", marginTop: "40px", marginBottom: "40px"}}/> <br/>
            <a className={"OurCompany-btn"} href={"https://stories.starbucks.com/stories/coffee-craft/"}
               target={"_blank"}>Learn more</a>

        </div>
    )
}

export default OurCoffee;

