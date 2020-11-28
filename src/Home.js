import React, { useState, useEffect } from 'react';
import desktopImage from './assets/img/Main-Banner.jpg';
import mobileImage from './assets/img/Main-Banner-mobile.jpg';
import Slider from "react-slick";

import "./assets/css/common-style.css";
import "./assets/css/homepage.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 767 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    }
}, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 767
        }
    ]
  };

  return (
    
    <div>

    {/* Section Starts  */}
    <section id="main-banner" className="banner-1">
            <img src="/home-img/banner-1.jpg" alt="" className="showInDesktop full-width" />
            <img src="/home-img/mobile/banner-1.jpg" alt="" className="showInMobile full-width" />
            
            

        <div className="showMobileBr asstet-overlay overlay-desktop">
            <h1 className="second-content nap-fontsize4 fc-white ff-pb">BLACK FRIDAY ARRIVED EARLY</h1>
            <h3 className="first-content nap-fontsize65 ff-pr fc-white">INCREDIBLE DEALS <br className="mobile-br"/>ALL NOVEMBER.<span className="ff-pb">Up
                    to <span>35%</span> off sitewide.</span></h3>

            <div className="cta-container ">
                <div className="cta-wrapper">
                    
                    <a className="ctagap" href="https://ca.shopnewage.com/collections/black-friday/" target="_blank"><button
                            className="napBtn ff-psb mobile-fontsize7">Shop All Deals</button></a>
                    
                </div>
            </div>
        </div>
        
    </section>

     {/* Banner 2 only for US  */}
     
    <section id="" className="second-banner common-content">
        <div className="ovl-banner-one">
            <div className="">
                
                    <img src="/home-img/banner-2.jpg" alt="" className="showInDesktop full-width"/>
                    <img src="/home-img/mobile/banner-2.jpg" alt="" className="showInMobile full-width"/>
                
                <div className="asstet-overlay ">
                    <h3 className=" nap-fontsize10 ff-psb fc-white ">Shop All Kitchen</h3>
                    <h3 className="first-content nap-fontsize1 fc-white ff-pb ">Up to 35% Off <br />Kitchen Items</h3>
                     <h3 className="second-content nap-fontsize4 fc-white ff-pr ">Select sets only</h3> 
                    <div className="cta-container ">
                        <div className="cta-wrapper">
                            <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&search_return=all&Category=Kitchen" target="_blank">
                                <button className="napBtn ff-psb mobile-fontsize7">SHOP ALL KITCHEN</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    {/* Product Slider  */}

    <section className="products-slider" id="products-slider">
      <Slider  className="content-slider-us "{...settings}>
            <div class="image-slide ">
                <a href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Faucet%5ESink" target="_blank">
                    <h3 class="nap-fontsize2 ff-psb fc-white  showInDesktop full-width">UP TO 35% OFF Kitchen <br />Sinks and Faucets <span class="hover-effect">›</span></h3>
                   
                        <img src="/home-img/sinks.jpg"
                            alt="" className="showInDesktop full-width"/>
                   
                        <img src="/home-img/mobile/sinks.jpg"
                            alt="" className="showInMobile full-width"/>
                </a>
                <div class="cta-container showInMobile">
                    <div class="cta-wrapper">
                        <a class="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Faucet%5ESink" target="_blank"><button
                                class="napBtn napBtn-light-blue ff-psb mobile-fontsize7">UP TO 35% OFF Kitchen <br />Sinks and Faucets</button></a>
                    </div>
                </div>
            </div>
            <div class="image-slide ">
                <a href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Cabinet+Organization" target="_blank">
                    <h3 class="nap-fontsize2 ff-psb fc-white  showInDesktop full-width">20% OFF Kitchen Cabinets<br />
                        and Organization <span class="hover-effect">›</span>
                    </h3>
                    
                        <img src="/home-img/organizers.jpg"
                            alt="" className="showInDesktop full-width"/>
                     
                        <img src="/home-img/mobile/organizers.jpg"
                            alt="" className="showInMobile full-width"/>
                </a>
                <div class="cta-container showInMobile">
                    <div class="cta-wrapper">
                        <a class="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Cabinet+Organization" target="_blank"><button
                                class="napBtn napBtn-light-blue ff-psb mobile-fontsize7">20% OFF Kitchen Cabinets <br />and Organization</button></a>
                    </div>
                </div>

            </div>
            <div class="image-slide ">
                <a href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Backsplash%5EBacksplash_Hexagon" target="_blank">
                    <h3 class="nap-fontsize2 ff-psb fc-white  showInDesktop full-width">35% OFF Kitchen <br />Backsplash <span class="hover-effect">›</span></h3>
                   
                        <img src="/home-img/backsplash.jpg"
                            alt="" className="showInDesktop full-width"/>
                        <img src="/home-img/mobile/backsplash.jpg"
                            alt="" className="showInMobile full-width"/>
                </a>
                <div class="cta-container showInMobile">
                    <div class="cta-wrapper">
                        <a class="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Backsplash%5EBacksplash_Hexagon" target="_blank"><button
                                class="napBtn napBtn-light-blue ff-psb mobile-fontsize7">35% OFF Kitchen <br /> Backsplash </button></a>
                    </div>
                </div>
            </div>
        </Slider>
    </section>
    
    {/* Banner 3 Common for both */}

    <section id="" className="third-banner common-content">
        <div className="ovl-banner-one">
            <img src="/home-img/banner-3.jpg"
                alt="" className="showInDesktop full-width"/>
            <img src="/home-img/mobile/banner-3.jpg"
                alt=""  className="showInMobile full-width"/>
            <div className="asstet-overlay ">
                <h3 className=" nap-fontsize10 ff-psb fc-white ">Tile and Plank Stone <br />Composite Flooring</h3>
                <h3 className="first-content nap-fontsize1 fc-white ff-pb ">Up to 15% Off</h3>
                <div className="cta-container ">
                    <div className="cta-wrapper">
                        <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&search_return=all&Category=Flooring" target="_blank">
                            <button className="napBtn ff-psb mobile-fontsize7">Shop composite flooring </button>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    {/* Banner 4 only for US */}
    
    <section id="" className="fourth-banner common-content">
        <div className="ovl-banner-one">
            <div className="">
                <img className="showInDesktop full-width"
                   src="/home-img/banner-4.gif"
                    alt=""/>
               
                    <img src="/home-img/mobile/banner-4.jpg"
                        alt=""  className="showInMobile"/>
                
                <div className="asstet-overlay ">
                    <h3 className=" nap-fontsize10 ff-psb fc-white ">Garage Storage Savings</h3>
                    <h3 className="first-content nap-fontsize1 fc-white ff-pb ">Up to 25% Off <br />Garage sets</h3>
                    <h3 className="second-content nap-fontsize4 fc-white ff-pr ">Select sets only</h3>
                    <div className="cta-container ">
                        <div className="cta-wrapper">
                            
                            <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&search_return=all&Category=Garage" target="_blank"><button
                                    className="napBtn ff-psb mobile-fontsize7">SHOP ALL GARAGE</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    {/* 2 Way Layout only for US  */}
    <section className="bannerRow4">
        <div className="banerContainer main-content full-width  /ta-center first-row">
            <div className="rowBannerHalf ">
               
                    <img src="/home-img/shelf-1.jpg"
                        alt="" className="showInDesktop full-width"/>
             
               
                    <img src="/home-img/mobile/shelf-1.jpg"
                        alt=""  className="showInMobile full-width"/>
                

                <div className="bannerOffer offDetails top-left">
                        <p className="nap-fontsize10 fc-white ff-pb ">Up to 30% Off<span
                                className="nap-fontsize2 ff-pr">Bold & Pro Racks</span></p>
                    <div className="cta-container ">
                        <div className="cta-wrapper">
                            <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Garage&search_return=all&Producttypetag=Racks" target="_blank">
                                <button className="napBtn ff-psb mobile-fontsize7">SHOP ALL RACKS</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rowBannerHalf ">
               
                    <img src="/home-img/shelf-2.jpg"
                        alt="" className="showInDesktop full-width"/>
             
                
                    <img src="/home-img/mobile/shelf-2.jpg"
                        alt=""  className="showInMobile"/>
                
                <div className="bannerOffer offDetails top-right">
                    <p className="nap-fontsize10 fc-white ff-pb  showInDesktop full-width">UP TO 35% OFF<span
                            className="nap-fontsize2 ff-pr">Pro Wall Mounted Shelving</span></p>

                    <p className="nap-fontsize10 fc-white ff-pb  showInMobile">Save up to 35%<span
                            className="nap-fontsize2 ff-pr">Pro Wall Mounted Shelves</span></p>
                    <div className="cta-container ">
                        <div className="cta-wrapper">
                            <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Garage&Producttypetag=Overhead+Storage&search_return=all" target="_blank">
                                <button className="napBtn ff-psb mobile-fontsize7">SHOP WALL MOUNTED SHELVING</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    

    {/*  Banner 5 Common for both  */}
    <section id="" className="fifth-banner">
        <div className="ovl-banner-one">
            <div className="">
                
                    <img src="/home-img/banner-5.jpg"
                        alt="" className="full-width showInDesktop full-width" />
               
                    <img src="/home-img/mobile/banner-5.jpg"
                        alt="" className="full-width showInMobile" />
               
                <div className="asstet-overlay ">
                    <h3 className="first-content nap-fontsize1 fc-white ff-psb  showInDesktop full-width">Outdoor kitchen <span>Sets up to 20% off</span></h3>
                  <h3 className="first-content nap-fontsize1 fc-white ff-psb  showInMobile">Outdoor kitchen Sets <span>up to 20% off</span> 
                    </h3>
                    <div className="cta-container ">
                        <div className="cta-wrapper">
                            <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&search_return=all&Category=Outdoor+Kitchen" target="_blank"><button
                                    className="napBtn ff-psb mobile-fontsize7">SHOP OUTDOOR KITCHEN SETS </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Other 2 way layout only for US */}
    <section id="new-services" className="new-services">
        <div className="banerContainer main-content full-width ta-center first-row">
            <div className="rowBannerHalf ">
                <div className="bannerOffer offDetails top-left">
                    <p className="nap-fontsize4 fc-white ff-pr ">Let us take care of the heavy lifting.</p>
                    <h3 className="nap-fontsize1 ff-psb fc-white ">White Glove <br />Premium Delivery</h3>
                    <div className="cta-container ">
                        <div className="cta-wrapper">
                            <a href="/delivery-services/" target="_blank"><button
                                    className="napBtn napBtn-light ff-psb mobile-fontsize7">LEARN MORE</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rowBannerHalf ">
                <div className="bannerOffer offDetails top-right">

                    <p className="nap-fontsize4 fc-white ff-pr ">Get your project planned, <br
                            className="mobile-br" />visualized and quoted.</p>
                    <h3 className="nap-fontsize1 ff-psb fc-white ">Free Expert <br className="desktop-br" />Design
                        <br className="mobile-br" />Services</h3>

                    <div className="cta-container ">
                        <div className="cta-wrapper">
                            <a href="/design-services/" target="_blank">
                                <button className="napBtn napBtn-light ff-psb mobile-fontsize7">Free 3d Design</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

  </div>

  

  )

  
  
}

export default Home;


