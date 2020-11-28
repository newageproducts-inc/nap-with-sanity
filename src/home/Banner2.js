import React, { Component } from 'react'

export default class banner extends Component {
    render() {
        return (

            <section id="" className="common-content">
                <div className="ovl-banner-one">
                    <div className="">

                        <img src={this.props.standard_desktop_img} alt="" className="showInDesktop full-width" />
                        <img src={this.props.standard_mobile_img} alt="" className="showInMobile full-width" />

                        <div className="asset-overlay ">
                            <h3 className=" nap-fontsize10 ff-psb fc-white ">{this.props.standard_small_text}</h3>
                            <h3 className="first-content nap-fontsize1 fc-white ff-pb ">{this.props.standard_big_text}</h3>
                            <h3 className="second-content nap-fontsize4 fc-white ff-pr ">{this.props.standard_subtitle_text}</h3>
                            <div className="cta-container ">
                                <div className="cta-wrapper">
                                    <a className="ctagap" href="https://shopnewage.com/collections/black-friday#?Collections=Deals+%26+Sales&search_return=all&Category=Kitchen" target="_blank" rel="noopener noreferrer">
                                        <button className="napBtn ff-psb mobile-fontsize7">{this.props.standard_cta}</button>
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
