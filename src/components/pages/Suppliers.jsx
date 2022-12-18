import React from "react";

const Suppliers = () => {
  return (
    <>
      <div className="nav-back"></div>
      <div
        style={{
          maxWidth: "45%",
          margin: "0 auto",
          paddingTop: "150px",
          paddingBottom: "150px",
        }}
      >
        <h1>
          <strong>Doing Business with Starbucks</strong>
        </h1>
        <img
          src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72908.jpg"
          style={{
            maxWidth: "900px",
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        ></img>
        <h2>
          <strong>A Message from Global Sourcing and Supplier Relations</strong>
        </h2>
        <p>
          For more than 40 years, Starbucks has been dedicated to inspiring and
          nurturing the human spirit – one person, one cup and one neighborhood
          at a time. We are honored to partner with suppliers who share our
          commitment to enhancing the Starbucks Experience for the customers and
          communities we serve. The information provided below as part of
          Supplier Guidance is intended for all Starbucks Suppliers engaged to
          provide products or services globally (a.k.a. Global Suppliers).
          However the information provided may be equally applicable to any
          supplier regardless of the breadth of their business with Starbucks.
        </p>
        <h2>
          <strong>Supplier Guidance</strong>
        </h2>

        <p>
          By actively seeking diverse-owned businesses to purchase from, we help
          build prosperous communities. We believe our Supplier Diversity
          Program has been a great success, and we’re happy to report that the
          amount of business we conduct with diverse suppliers grows every year.
        </p>

        <h2>
          <strong>Standard Terms & Conditions</strong>
        </h2>

        <p>
          {" "}
          Minimum legal terms necessary to protect our customers, our brand, and
          our supplier partners.
        </p>
        <a
          className={"OurCompany-btn"}
          href={"https://stories.starbucks.com/stories/coffee-craft/"}
          target={"_blank"}
          style={{ margin: "50px" }}
        >
          Learn more
        </a>
        <a
          className={"OurCompany-btn"}
          href={"https://stories.starbucks.com/stories/coffee-craft/"}
          target={"_blank"}
          style={{ margin: "50px" }}
        >
          View
        </a>
        <a
          className={"OurCompany-btn"}
          href={"https://stories.starbucks.com/stories/coffee-craft/"}
          target={"_blank"}
          style={{ margin: "50px", backgroundColor: "snow" }}
        >
          Contact marketing team
        </a>
      </div>
    </>
  );
};

export default Suppliers;
