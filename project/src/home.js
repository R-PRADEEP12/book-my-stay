import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import "./home.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 2;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sliderSettings1 = {
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    swipeToSlide: true,
    nextArrow: <div className="slick-next">&#62;</div>,
    prevArrow: <div className="slick-prev">&#60;</div>,
    edgeFriction: 1,
  };
 
const sliderSettings2 = {
  dots:false,
  infinite:true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1 ,
  nextArrow: <div className="slick-next1">&#62;</div>,
    prevArrow: <div className="slick-prev1">&#60;</div>,
  autoplay: true,
  autoplaySpeed: 1000,
};
  return (
    <div>
      <header>
        <div className={`home-div ${isScrolled ? "scrolled" : ""}`}>
          <nav className={`home-nav ${isScrolled ? "scrolled" : ""}`}>
            <img src="https://img.freepik.com/premium-vector/cute-nacho-icon-illustration-food-icon-concept-with-funny-pose-isolated-white-background_244307-420.jpg?w=2000" className="home-img" alt="Logo" />
            <h1 className="home-h1">FUN HOTELS</h1>
            <button className="home-button1"><Link to="/home3" class="home-deco">Home</Link></button>
            <button className="home-button">Rooms</button>
            <button className="home-button2">Blog</button>
            <button className="home-button3">Contact</button>
            <button className="home-button4"><Link to="/login" class="home-dec1">Sign In/Sign Up</Link></button>
          </nav>
        </div>
      </header>

      <div className="content-overlay">
        <h2>Rest Journey in Single step,<br />in the breathtaking</h2>
        <p className="home-para">Discover a world of luxury and comfort</p>
        <button className="home-button5">
          <h1>Explore Now</h1>
        </button>
      </div>
      <div className="home-div1">
        <h2 className="home-head1">Book Now and Pay Later</h2>
        <div className="home-form">
          <button className="home-button6">
            <FaMapMarkerAlt /> Going to
          </button>
          <input type="date" placeholder="Date of Booking" className="home-date" />
          <input type="number" placeholder="Travelers" className="home-count" />
          <button className="home-submit">Search</button>
        </div>
        <div className="home-form">
          <input type="checkbox" id="bike" name="vehicle" value="bike" className="home-box" />
          <label htmlFor="bike" className="home-check">
            Add a Bike
          </label>
          <input type="checkbox" id="car" name="vehicle" value="car" className="home-box" />
          <label htmlFor="car" className="home-check">
            Add a Car
          </label>
        </div>
      </div>
      <br /><br />
      <br /><br />
      <br />
      <div>
        <h1 className="home-head3">Explore Stays in Trending Destination</h1>
        <div className="home-div2">
          <Slider {...sliderSettings1}>
            <form class="home-form2">
              <div>
                <img src="https://thumbs.dreamstime.com/b/city-palace-pichola-lake-night-udaipur-rajasthan-india-asia-30769223.jpg" class="home-im" alt="Udaipur"></img>
               <hr class="home-hor"></hr>
                <p class="home-caption">Udaipur<br />India</p><br></br>
              </div>
            </form>
            <form class="home-form3">
              <div>
                <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/DJ/OM/HJ/2599162/prefabricated-tree-house-500x500.jpg" class="home-im1" alt="Pondicherry"></img>
               <hr class="home-hor1"></hr>
                <p class="home-caption1">Pondicherry<br />India</p><br></br>
              </div>
            </form>
            <form class="home-form1">
              <div>
                <img src="https://cdn.getyourguide.com/img/tour/50b656475c1c0.jpeg/145.jpg" class="home-im2" alt="Kochi"></img>
               <hr class="home-hor2"></hr>
                <p class="home-caption2">Kochi<br />India</p><br></br>
              </div>
            </form>
            <form class="home-form4">
              <div>
                <img src="https://traveltriangle.com/blog/wp-content/uploads/2016/02/manali.jpg" class="home-im3" alt="Manali"></img>
              <hr class="home-hor3"></hr>
                <p class="home-caption3">Manali<br />India</p><br></br>
              </div>
            </form>
            <form class="home-form5">
              <div>
                <img src="https://www.livelaw.in/h-upload/2021/02/18/750x450_389326-gulmarg-jk-hc.jpg" class="home-im4" alt="Manali"></img>
              <hr class="home-hor4"></hr>
                <p class="home-caption4">Kashmir<br />India</p><br></br>
              </div>
            </form>
            <form class="home-form6">
              <div>
                <img src="https://www.specialholidays.com/admin/images/package/package_gallery/5d4d2a806cca99.73483889.jpg" class="home-im5" alt="Manali"></img>
               <hr class="home-hor5"></hr>
                <p class="home-caption5">Goa<br />India</p><br></br>
              </div>
            </form>
           
            <form class="home-form7">
              <div>
                <img src="https://t4.ftcdn.net/jpg/02/01/18/91/360_F_201189187_HAvNKbc5dBACc8Sl0sXVv8lVbwQua0ph.jpg" class="home-im5" alt="Manali"></img>
               <hr class="home-hor5"></hr>
                <p class="home-caption5">Mumbai<br />India</p><br></br>
              </div>
            </form>
        <br/>
           
          </Slider>
        </div>
      </div>
      <br/>
      <h1 class="home-member">Fun Membership</h1>
      <div class="home-fun">
        <form class="home-confu">
      <img src="https://upgradedpoints.com/wp-content/uploads/2021/07/Las-Vegas-Strip.jpg?auto=webp&disable=upscale&width=1200" class="home-image"/><br/><br/>
       <div class="home-text">
      <h2 class="home-head7">Save instantly with<br/> Fun Rewards</h2>
      <h3 class="home-head6">You can enjoy access to perks like Member Prices,<br/> saving an average of 15% on thousands of hotels. <br/>Terms may apply.</h3>
      <button className="home-textbut"><Link to="/See-Member-Prizes" class="home-dec">See Member Prizes</Link></button>
    </div></form></div>
    <h1 class="home-header">Quick Hotel Search</h1><br/>
    <div class="home-cont2">
    <Slider {...sliderSettings2}>
    <div class="home-image-container1">
        <img src="https://static.fabhotels.com/cities/android/goa_v3.jpg" class="home-image3" alt="Goa"/>
        <div class="home-image-overlay">Goa<br/>Avg. Price: $3,199</div>
    </div>
    
    <div class="home-image-container">
        <img src="https://shesavesshetravels.com/wp-content/uploads/2019/06/mysore-palace-light-up.jpg" class="home-image5" alt="Goa"/>
        <div class="home-image-overlay1">Banglore<br/>Avg. Price: $1,199</div>
    </div>
    <div class="home-image-container">
        <img src="https://www.famousindia.in/wp-content/uploads/2020/12/chennai-famous-india.png" class="home-image4" alt="Goa"/>
        <div class="home-image-overlay2">Chennai<br/>Avg. Price: $1,199</div>
    </div>
    <div class="home-image-container1">
        <img src="https://static.fabhotels.com/cities/android/goa_v3.jpg" class="home-image3" alt="Goa"/>
        <div class="home-image-overlay">Goa<br/>Avg. Price: $3,199</div>
    </div>
    
    <div class="home-image-container">
        <img src="https://shesavesshetravels.com/wp-content/uploads/2019/06/mysore-palace-light-up.jpg" class="home-image5" alt="Goa"/>
        <div class="home-image-overlay1">Banglore<br/>Avg. Price: $1,199</div>
    </div>
    <div class="home-image-container">
        <img src="https://www.famousindia.in/wp-content/uploads/2020/12/chennai-famous-india.png" class="home-image4" alt="Goa"/>
        <div class="home-image-overlay2">Chennai<br/>Avg. Price: $1,199</div>
    </div></Slider>
</div>
<br/>
<h1 class="home-deals">Last Minute Weekend Deals</h1>
<h3 class="home-dealh">Showing deals for:5 Jan - 10 Jan</h3><br/>
<div class="home-divis">
  <div class="home-r"><img src="https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg" class="home-rimg"/>
  <br/><br/>
  </div>
  <div class="home-r1"></div>
  <div class="home-r1"></div>
</div><br/>
    </div>
  );
}

export default Home;
