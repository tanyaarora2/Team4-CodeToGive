import React from "react";
import "./FlexboxGrid.css";
function Flexbox() {
  const image1Url = "https://cdn-icons-png.flaticon.com/128/10060/10060522.png";
  const image2Url = "https://cdn-icons-png.flaticon.com/128/547/547562.png";
  const image3Url = "https://cdn-icons-png.flaticon.com/128/1076/1076789.png";
  const image4Url = "https://cdn-icons-png.flaticon.com/128/685/685352.png";
  const image5Url = "https://cdn-icons-png.flaticon.com/128/2088/2088617.png";
  const image6Url = "https://cdn-icons-png.flaticon.com/128/768/768818.png";
  const image7Url = "https://cdn-icons-png.flaticon.com/128/5821/5821672.png";
  const image8Url = "https://cdn-icons-png.flaticon.com/128/658/658124.png";
  const image9Url = "https://cdn-icons-png.flaticon.com/128/862/862032.png";

  return (
    <div className="flexbox-grid">
      <div className="row">
        <div className="box">
          <img src={image1Url} alt="Image 1" />
          <p className="number">4340</p>
          <p className="box-text">Children Benefited</p>
        </div>
        <div className="box">
          <img src={image2Url} alt="Image 2" />
          <p className="number">329</p>
          <p className="box-text">Children United with families</p>
        </div>
        <div className="box">
          <img src={image3Url} alt="Image 3" />
          <p className="number">977</p>
          <p className="box-text">Children Adopted</p>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <img src={image4Url} alt="Image 4" />
          <p className="number">102325</p>
          <p className="box-text">Yearly: Meals Served</p>
        </div>
        <div className="box">
          <img src={image5Url} alt="Image 5" />
          <p className="number">102325</p>
          <p className="box-text">Yearly: Hours of Care</p>
        </div>
        <div className="box">
          <img src={image6Url} alt="Image 6" />
          <p className="number">37692</p>
          <p className="box-text">Yearly: Hours of Schooling</p>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <img src={image7Url} alt="Image 7" />
          <p className="number">4451</p>
          <p className="box-text">Yearly: Hours of Therapy</p>
        </div>
        <div className="box">
          <img src={image8Url} alt="Image 8" />
          <p className="number">3851</p>
          <p className="box-text">Yearly: Health Check up done</p>
        </div>
        <div className="box">
          <img src={image9Url} alt="Image 9" />
          <p className="number">676</p>
          <p className="box-text">Yearly: Medical Tests & Immunization</p>
        </div>
      </div>
    </div>
  );
}

export default Flexbox;
