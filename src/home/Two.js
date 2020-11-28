import React, { Component } from 'react'

export default class Two extends Component {
    render() {
        return (
            
                <section className="bannerRow4">
                    <div className="banerContainer main-content full-width  /ta-center first-row">
                        <div className="rowBannerHalf ">

                            <img src={this.props.standard_left_desktop_img} alt="" className="showInDesktop full-width" />
                            <img src={this.props.standard_left_mobile_img} alt="" className="showInMobile full-width" />

                            <div className="bannerOffer offDetails top-left">
                                <p className="nap-fontsize10 fc-white ff-pb ">{this.props.standard_small_text_left}</p>
                                <div className="cta-container ">
                                    <div className="cta-wrapper">
                                        <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Garage&search_return=all&Producttypetag=Racks" target="_blank" rel="noopener noreferrer">
                                            <button className="napBtn ff-psb mobile-fontsize7">{this.props.standard_cta_left}</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rowBannerHalf ">

                            <img src={this.props.standard_right_desktop_img} alt="" className="showInDesktop full-width" />
                            <img src={this.props.standard_right_mobile_img} alt="" className="showInMobile full-width" />

                            <div className="bannerOffer offDetails top-right">
                                <p className="nap-fontsize10 fc-white ff-pb full-width">{this.props.standard_small_text_right}</p>
                                <div className="cta-container ">
                                    <div className="cta-wrapper">
                                        <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&Category=Garage&Producttypetag=Overhead+Storage&search_return=all" target="_blank" rel="noopener noreferrer">
                                            <button className="napBtn ff-psb mobile-fontsize7">{this.props.standard_cta_right}</button>
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
