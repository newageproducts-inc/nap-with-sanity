import React, { Component } from 'react'
import Slider from "react-slick";


export default class Products extends Component {
    render() {

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

            <section className="products-slider" id="products-slider">
                <Slider className="content-slider-us "{...settings}>
                    <div className="image-slide ">
                        <a href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Faucet%5ESink" target="_blank" rel="noopener noreferrer">
                            <h3 className="nap-fontsize2 ff-psb fc-white  showInDesktop full-width">UP TO 35% OFF Kitchen <br />Sinks and Faucets <span className="hover-effect">›</span></h3>

                            <img src="/home-img/sinks.jpg"
                                alt="" className="showInDesktop full-width" />

                            <img src="/home-img/mobile/sinks.jpg"
                                alt="" className="showInMobile full-width" />
                        </a>
                        <div className="cta-container showInMobile">
                            <div className="cta-wrapper">
                                <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Faucet%5ESink" target="_blank" rel="noopener noreferrer"><button
                                    className="napBtn napBtn-light-blue ff-psb mobile-fontsize7">UP TO 35% OFF Kitchen <br />Sinks and Faucets</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="image-slide ">
                        <a href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Cabinet+Organization" target="_blank" rel="noopener noreferrer">
                            <h3 className="nap-fontsize2 ff-psb fc-white  showInDesktop full-width">20% OFF Kitchen Cabinets<br />
                        and Organization <span className="hover-effect">›</span>
                            </h3>

                            <img src="/home-img/organizers.jpg"
                                alt="" className="showInDesktop full-width" />

                            <img src="/home-img/mobile/organizers.jpg"
                                alt="" className="showInMobile full-width" />
                        </a>
                        <div className="cta-container showInMobile">
                            <div className="cta-wrapper">
                                <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Cabinet+Organization" target="_blank" rel="noopener noreferrer"><button
                                    className="napBtn napBtn-light-blue ff-psb mobile-fontsize7">20% OFF Kitchen Cabinets <br />and Organization</button></a>
                            </div>
                        </div>

                    </div>
                    <div className="image-slide ">
                        <a href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Backsplash%5EBacksplash_Hexagon" target="_blank" rel="noopener noreferrer">
                            <h3 className="nap-fontsize2 ff-psb fc-white  showInDesktop full-width">35% OFF Kitchen <br />Backsplash <span className="hover-effect">›</span></h3>

                            <img src="/home-img/backsplash.jpg"
                                alt="" className="showInDesktop full-width" />
                            <img src="/home-img/mobile/backsplash.jpg"
                                alt="" className="showInMobile full-width" />
                        </a>
                        <div className="cta-container showInMobile">
                            <div className="cta-wrapper">
                                <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Kitchen&search_return=all&Producttypetag=Backsplash%5EBacksplash_Hexagon" target="_blank" rel="noopener noreferrer"><button
                                    className="napBtn napBtn-light-blue ff-psb mobile-fontsize7">35% OFF Kitchen <br /> Backsplash </button></a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        )
    }
}
