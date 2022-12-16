import React from "react";

const OfficeFoods = () => {
  return (
    <>
      <div className="nav-back"></div>
      <div
        style={{
          maxWidth: "50%",
          margin: "0 auto",
          paddingTop: "150px",
          paddingBottom: "150px",
        }}
      >
        <h1>
          <strong>We Proudly Serve Starbucks® Coffee Program</strong>
        </h1>
        <img
          src="https://www.nestlecoffeepartnerssl.com/media/wysiwyg/public/starbucks/WPS_Portal_Desktop_AttractCustomersWith.jpg"
          style={{
            maxWidth: "800px",
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
          }}
          alt=""
        ></img>
        <h2>
          <strong>
            Starbucks is the #1 brand mentioned by consumers when they think of
            coffee
          </strong>
        </h2>
        <p>
          Starbucks is known the world over for consistent, high-quality coffee.
          The We Proudly Serve Starbucks® coffee program allows you to bring
          this highly recognizable—and enticing—experience to your customers and
          elevate your foodservice program overall.
        </p>
        <p>
          TTap into beloved, limited-time Starbucks® seasonal beverages, as well
          as in-store signage, social media assets, branded cups and much more,
          creating compelling reasons for your customers to return again and
          again.
        </p>
        <p>
          {" "}
          Starbucks is committed to 100% ethically sourced coffee through an
          industry-leading verification program that supports local coffee
          farmers, their communities and the environment.
        </p>
        <img
          src="https://www.nestlecoffeepartnerssl.com/media/wysiwyg/public/starbucks/WPS_Portal_Desktop_FeelGoodAbout.jpg"
          style={{
            maxWidth: "800px",
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
          }}
          alt=""
        />{" "}
        <br />
        <a
          className={"OurCompany-btn"}
          href={"https://stories.starbucks.com/stories/coffee-craft/"}
          target={"_blank"}
          rel="noreferrer"
          alt=""
        >
          Learn more
        </a>
      </div>
    </>
  );
};

export default OfficeFoods;
