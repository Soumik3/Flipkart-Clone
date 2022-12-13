import React from 'react';
import "../css/main.css";
import Carousel from 'react-bootstrap/Carousel';

function Main() {
  return (
    <>

      <div className="container">
        <div className="item">
          <img src={require("../img/item1.png")} alt='item1' />
          <p>Grocery</p>
        </div>
        <div className="item">
          <img src={require("../img/item2.png")} alt='item2' />
          <p>Mobiles</p>
        </div>
        <div className="item">
          <img src={require("../img/item3.png")} alt='item3' />
          <p>Fashion</p>
        </div>
        <div className="item">
          <img src={require("../img/item4.png")} alt='item4' />
          <p>Electronics</p>
        </div>
        <div className="item">
          <img src={require("../img/item5.png")} alt='item5' />
          <p>Home</p>
        </div>
        <div className="item">
          <img src={require("../img/item6.png")} alt='item6' />
          <p>Appliances</p>
        </div>
        <div className="item">
          <img src={require("../img/item7.png")} alt='item7' />
          <p>Travel</p>
        </div>
        <div className="item">
          <img src={require("../img/item8.png")} alt='item8' />
          <p>Top Offers</p>
        </div>
        <div className="item">
          <img style={{ position: "relative", left: '40px' }} src={require("../img/item9.png")} alt='item9' />
          <p>Beauty, Toys & More</p>
        </div>
        <div className="item">
          <img style={{ position: "relative", left: '11px' }} src={require("../img/item10.png")} alt='item10' />
          <p>Two Wheelers</p>
        </div>
      </div>

      <div className="banner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../img/banner.png")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../img/banner2.png")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../img/banner3.png")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="card">
        <div className="left">
          <div className="content1">
            <h3>Best Of Electronics</h3>
            <button style={{
              height: "36px",
              width: "103px", borderRadius: '1px', marginTop: "15px", margiBottom: "7px",
            }} type="button" className="btn btn-primary">VIEW All</button>
          </div>
          <img src={require('../img/card1.png')} alt='card1' />
        </div>
        <div className="carditem">

          <div className="cards">
            <div className="img">
              <img src={require("../img/monitor.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Monitors</p>
              <p style={{ color: 'green' }}>From ₹6599</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>acer</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img src={require("../img/printers.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Printers</p>
              <p style={{ color: 'green' }}>From ₹3999</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>HP</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img src={require("../img/monitor2.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Monitors</p>
              <p style={{ color: 'green' }}>From ₹9999</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>SAMSUNG</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img src={require("../img/camera.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ marginTop: "18px", fontWeight: '500' }}>Top Mirrorless Cameras</p>
              <p style={{ color: 'green' }}>Shop Noew</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>Canon, Sony, Fujiflim..</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={require('../img/rightcard.png')} alt='card1' />
        </div>
      </div>

      <div className="card">
        <div className="left">
          <div className="content1">
            <h3>Beauty ,Food, Toys & more</h3>
            <button style={{
              height: "36px",
              width: "103px", borderRadius: '1px', marginTop: "15px", margiBottom: "7px",
            }} type="button" className="btn btn-primary">VIEW All</button>
          </div>
          <img src={require('../img/card2.png')} alt='card1' />
        </div>
        <div className="carditem">

          <div className="cards">
            <div className="img">
              <img src={require("../img/cycle.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Non-Geared Cycles</p>
              <p style={{ color: 'green' }}>Up to 40% off</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>Hercules, Hero, & More</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/instruments.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>String Instruments</p>
              <p style={{ color: 'green' }}>Up to 70% off</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>Guiters, Ukuleles & More</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/fruits.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Drt Fruits</p>
              <p style={{ color: 'green' }}>Up to 75% off</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>Happilo, Farmley & More</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/gym.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Gym Essentials</p>
              <p style={{ color: 'green' }}>From ₹139</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>Shop Now</p>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/Cricket.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Cricket</p>
              <p style={{ color: 'green' }}>Up to 45% off</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>CEAT, MRF,& More</p>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/football.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Premimum Footballs</p>
              <p style={{ color: 'green' }}>Up to 60% off</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>Nivia, Cosco,& More</p>
            </div>
          </div>

        </div>
      </div>

      <div className="card">
        <div className="left">
          <div className="content1">
            <h3>Winter Essentials</h3>
            <button style={{
              height: "36px",
              width: "103px", borderRadius: '1px', marginTop: "15px", margiBottom: "7px",
            }} type="button" className="btn btn-primary">VIEW All</button>
          </div>
        </div>
        <div className="carditem">

          <div className="cards">
            <div className="img">
              <img style={{ height: "132px", width: "200px", }} src={require("../img/caps.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Men's Caps</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/cups.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Cups & Saucers</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/pants.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Men's Track Pants</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/blankets.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Bed Linen & Blankets</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/women.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Women's Sweatshirts</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/men.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Men's Sweatshirts</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>
          {/* <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/football.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Premimum Footballs</p>
              <p style={{ color: 'green' }}>Up to 60% off</p>
              <p style={{ fontWeight: "100", color: 'darkgray', fontSize: "14px", fontFamily: "sans-serif" }}>Nivia, Cosco,& More</p>
            </div>
          </div> */}

        </div>
      </div>

      <div className="card">
        <div className="left">
          <div className="content1">
            <h3>Wedding & Gifting Specials</h3>
            <button style={{
              height: "36px",
              width: "103px", borderRadius: '1px', marginTop: "15px", margiBottom: "7px",
            }} type="button" className="btn btn-primary">VIEW All</button>
          </div>
        </div>
        <div className="carditem">

          <div className="cards">
            <div className="img">
              <img style={{ height: "132px", width: "200px", }} src={require("../img/watches.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Wrist Watches</p>
              <p style={{ color: 'green' }}>Min 90% off</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/dress.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Kid's dresses</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/bedsheets.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Bedsheets</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>

          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/home.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Home Appliances</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/blankets2.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>Blankets</p>
              <p style={{ color: 'green' }}>Min 50% off</p>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <img style={{ height: "130px", width: "162px" }} src={require("../img/handbags.png")} alt="" />
            </div>
            <div className="details">
              <p style={{ fontWeight: '500' }}>HandBags & Clutches</p>
              <p style={{ color: 'green' }}>Min 70% off</p>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Main