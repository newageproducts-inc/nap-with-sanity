import React, { Component } from 'react'

export default class banner extends Component {
    render() {
        return (

            <section id="main-banner" className="banner-1">
                <img src={this.props.banner_desktop_img} alt="" className="showInDesktop full-width" />
                <img src={this.props.banner_mobile_img} alt="" className="showInMobile full-width" />

                <div className="showMobileBr asset-overlay overlay-desktop">
                    <h1 className="second-content nap-fontsize4 fc-white ff-pb">{this.props.small_title}</h1>
                    <h3 className="first-content nap-fontsize65 ff-pr fc-white">{this.props.big_title}</h3>

                    <div className="cta-container ">
                        <div className="cta-wrapper">
                            <a className="ctagap" href="https://ca.shopnewage.com/collections/black-friday/" target="_blank" rel="noopener noreferrer"><button
                                className="napBtn ff-psb mobile-fontsize7">{this.props.banner_cta}</button></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
