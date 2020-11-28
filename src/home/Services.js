import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (

                <section id="new-services" className="new-services">
                    <div className="banerContainer main-content full-width ta-center first-row">
                        <div className="rowBannerHalf ">
                            <div className="bannerOffer offDetails top-left">
                                <p className="nap-fontsize4 fc-white ff-pr ">{this.props.small_title_left}</p>
                                <h3 className="nap-fontsize1 ff-psb fc-white ">{this.props.standard_big_text_left}</h3>
                                <div className="cta-container ">
                                    <div className="cta-wrapper">
                                        <a href="/delivery-services/" target="_blank" rel="noopener noreferrer"><button
                                            className="napBtn napBtn-light ff-psb mobile-fontsize7">{this.props.standard_cta_left}</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rowBannerHalf ">
                            <div className="bannerOffer offDetails top-right">

                                <p className="nap-fontsize4 fc-white ff-pr ">{this.props.small_title_right}</p>
                                <h3 className="nap-fontsize1 ff-psb fc-white ">{this.props.standard_big_text_right}</h3>

                                <div className="cta-container ">
                                    <div className="cta-wrapper">
                                        <a href="/design-services/" target="_blank" rel="noopener noreferrer">
                                            <button className="napBtn napBtn-light ff-psb mobile-fontsize7">{this.props.standard_cta_right}</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
        )
    }
}
