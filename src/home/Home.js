import React, { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// Component
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Products from "./Products";
import Two from "./Two";
import Services from "./Services";

// CSS
import "../assets/css/common-style.css";
import "./homepage.css";
import "./homepage.scss";



function Home() {
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleWindowResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleWindowResize);

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     }
    // }, []);

    return (

        <div>

            {/* Section Starts  */}
            <div className="component-banner-1">

            <Banner
                banner_desktop_img="/home-img/banner-1.jpg"
                banner_mobile_img="/home-img/mobile/banner-1.jpg"
                small_title="BLACK FRIDAY ARRIVED EARLY"
                big_title={["INCREDIBLE DEALS ", <br className='mobile-br' />, "ALL NOVEMBER.", <span className='ff-pb'>Up to <span>35%</span> off sitewide.</span>]}
                banner_cta="Shop All Deals"
            />

            </div>

            {/* Banner 2*/}
            <div className="component-banner-2">

                <Banner2
                    standard_desktop_img="/home-img/banner-2.jpg"
                    standard_mobile_img="/home-img/mobile/banner-2.jpg"
                    standard_small_text="Shop All Kitchen"
                    standard_big_text={["Up to 35% Off", <br />, "Kitchen Items"]}
                    standard_subtitle_text="Select sets only"
                    standard_cta="Shop All Kitchen"
                />
            </div>

            {/* Product Slider */}
            <div className="product-slider">

                <Products />
        
            </div>

            {/* Banner 3 */}
            <div className="component-banner-3">
                <Banner2
                    standard_desktop_img="/home-img/banner-3.jpg"
                    standard_mobile_img="/home-img/mobile/banner-3.jpg"
                    standard_small_text={["Tile and Plank Stone", <br />, "Composite Flooring"]}
                    standard_big_text={["Up to 35% Off", <br />, "Kitchen Items"]}
                    standard_cta="Shop composite flooring "
                />
            </div>

            {/* Banner 4 */}
            <div className="component-banner-4">
                <Banner2
                    standard_desktop_img="/home-img/banner-4.gif"
                    standard_mobile_img="/home-img/mobile/banner-4.jpg"
                    standard_small_text="Garage Storage Savings"
                    standard_big_text={["Up to 25% Off", <br />, "Garage sets"]}
                    standard_subtitle_text="Select sets only"
                    standard_cta="Shop All Garage"
                />
            </div>

            {/* 2 Way Layout with Images */}
            <div className="component-two-layout">
                <Two
                    standard_left_desktop_img="/home-img/shelf-1.jpg"
                    standard_left_mobile_img="/home-img/mobile/shelf-1.jpg"
                    standard_small_text_left={["Up to 30% Off", <span className='nap-fontsize2 ff-pr'> Bold & Pro Racks </span>]}
                    standard_cta_left="Shop All Garage"
                    // 
                    standard_right_desktop_img="/home-img/shelf-2.webp"
                    standard_right_mobile_img="/home-img/mobile/shelf-2.webp"
                    standard_small_text_right={["UP TO 35% OFF", <span className='nap-fontsize2 ff-pr'>Pro Wall Mounted Shelving</span>]}
                    standard_cta_right="SHOP WALL MOUNTED SHELVING"
                />
            </div>


            {/*  Banner 5 Common for both  */}
            <div className="component-banner-5">
                <Banner2
                    standard_desktop_img="/home-img/banner-5.jpg"
                    standard_mobile_img="/home-img/mobile/banner-5.jpg"
                    standard_big_text={["Outdoor Kitchen", <span>SETS UP TO 20% OFF</span>]}
                    standard_cta="SHOP OUTDOOR KITCHEN SETS "
                />
            </div>

            {/*  Other 2 way layout*/}
            <div className="component-two-layout">
                <Services
                    small_title_left="Let us take care of the heavy lifting."
                    standard_big_text_left={["White Glove", <br className="desktop-br" />, "Premium Delivery"]}
                    standard_cta_left="Learn more"
                    // 
                    small_title_right={["Get your project planned", <br className="mobile-br" />, "visualized and quoted."]}
                    standard_big_text_right={["Free Expert", <br className="desktop-br" />, "Design", <br className="mobile-br" />, "Services"]}
                    standard_cta_right="Free 3d Design"
                />
            </div>
            
        </div>
        
    )
    
}

export default Home;


