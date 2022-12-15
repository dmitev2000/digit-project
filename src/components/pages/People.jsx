import React from "react";


const People = () => {
    return (
        <div style={{maxWidth: '45%', margin: '0 auto', paddingTop: '150px', paddingBottom: '150px'}}>
            <h1><strong>OUR COMPANY</strong></h1>
            <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                style={{maxWidth: '800px', width: "100%", marginTop: "40px", marginBottom: "40px"}}></img>
            <h2><strong>Inclusion & Diversity</strong></h2>
            <p>We put our partners (employees) first, empowering them by providing meaningful opportunities to pursue
                their aspirations.</p>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73340.jpg"
                 style={{maxWidth: '800px', width: "100%", marginTop: "40px", marginBottom: "40px"}}></img>


            <h2><strong>Opportunity</strong></h2>

            <p>TWe put our partners (employees) first, empowering them by providing meaningful opportunities to pursue
                their aspirations.</p>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73341.jpg"
                 style={{maxWidth: '800px', width: "100%", marginTop: "40px", marginBottom: "40px"}}></img>

            <h2><strong>Community</strong></h2>

            <p> Across the globe, we serve to strengthen each community we are part of by being the neighbor every
                neighborhood wants.
            </p>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73342.jpg"
                 style={{maxWidth: '800px', width: "100%", marginTop: "40px", marginBottom: "40px"}}></img>
            <a className={"OurCompany-btn"} href={"https://stories.starbucks.com/stories/coffee-craft/"} target={"_blank"}>Learn more</a>

        </div>
    )
}

export default People;

