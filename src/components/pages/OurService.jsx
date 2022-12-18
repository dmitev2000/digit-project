import React from "react";

const ourCompany = () => {
  return (
    <>
      <div className="nav-back"></div>
      <div
        style={{
          maxWidth: "35%",
          margin: "0 auto",
          paddingTop: "150px",
          paddingBottom: "150px",
        }}
      >
        <h1>
          <strong>OUR SERVICE</strong>
        </h1>
        <img
          src="https://starbmag.com/wp-content/uploads/2022/08/image-347.png"
          style={{
            maxWidth: "800px",
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        ></img>
        <h2>
          <strong>How can we help you?</strong>
        </h2>
        <p>Coffee at Home</p>
        <p>Ordering Online Home Brewing Coffee Basics</p>
        <p>Careers at Starbucks</p>
        <img
          src={
            "https://images.unsplash.com/photo-1546815670-5c5e437ffc6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          }
          style={{
            maxWidth: "1080px",
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        />{" "}
        <br />
        <a
          className={"OurCompany-btn"}
          href={
            "https://customerservice.starbucks.com/app/answers/list/session/L3RpbWUvMTY3MTEwMTY3OC9nZW4vMTY3MTEwMTY3OC9zaWQvZlVCUCU3RWVVdFBqVE1OV3lCQmx5MXNkamtSUjVKWG14Szd5ZGpiclVlU25OTTRfZjY4WnBLWTBMbTliUXJORkhYWGJlazFza0VhNWRBUlpVR0V0eXJFRHROSE9mNjY4VmhaWTR3VDFJMFU3SnR5elklN0VjUEs4WHJoZyUyMSUyMQ==/p/1009"
          }
          style={{ margin: "20px" }}
          target={"_blank"}
        >
          Covid resources
        </a>
        <a
          className={"OurCompany-btn"}
          href={
            "https://customerservice.starbucks.com/app/answers/list/session/L3RpbWUvMTY3MTEwMTY3OC9nZW4vMTY3MTEwMTY3OC9zaWQvZlVCUCU3RWVVdFBqVE1OV3lCQmx5MXNkamtSUjVKWG14Szd5ZGpiclVlU25OTTRfZjY4WnBLWTBMbTliUXJORkhYWGJlazFza0VhNWRBUlpVR0V0eXJFRHROSE9mNjY4VmhaWTR3VDFJMFU3SnR5elklN0VjUEs4WHJoZyUyMSUyMQ==/p/164"
          }
          style={{ margin: "20px" }}
          target={"_blank"}
        >
          Starbucks for life{" "}
        </a>{" "}
        <br />
        <a
          className={"OurCompany-btn"}
          href={
            "https://customerservice.starbucks.com/app/answers/list/session/L3RpbWUvMTY3MTEwMTY3OC9nZW4vMTY3MTEwMTY3OC9zaWQvZlVCUCU3RWVVdFBqVE1OV3lCQmx5MXNkamtSUjVKWG14Szd5ZGpiclVlU25OTTRfZjY4WnBLWTBMbTliUXJORkhYWGJlazFza0VhNWRBUlpVR0V0eXJFRHROSE9mNjY4VmhaWTR3VDFJMFU3SnR5elklN0VjUEs4WHJoZyUyMSUyMQ==/p/133"
          }
          style={{ margin: "20px" }}
          target={"_blank"}
        >
          {" "}
          Starbucks rewards
        </a>
        <a
          className={"OurCompany-btn"}
          href={
            "https://customerservice.starbucks.com/app/answers/list/session/L3RpbWUvMTY3MTEwMTY3OC9nZW4vMTY3MTEwMTY3OC9zaWQvZlVCUCU3RWVVdFBqVE1OV3lCQmx5MXNkamtSUjVKWG14Szd5ZGpiclVlU25OTTRfZjY4WnBLWTBMbTliUXJORkhYWGJlazFza0VhNWRBUlpVR0V0eXJFRHROSE9mNjY4VmhaWTR3VDFJMFU3SnR5elklN0VjUEs4WHJoZyUyMSUyMQ==/p/141"
          }
          style={{ margin: "20px" }}
          target={"_blank"}
        >
          Starbucks Card
        </a>
      </div>
    </>
  );
};

export default ourCompany;
