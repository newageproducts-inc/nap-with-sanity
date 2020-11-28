import React, { useState } from "react";
import Modal from "react-modal";
import SlickSlider from "./SlickSlider";



function Team() {
  const [modalIsOpenFirst, setModalIsOpenFirst] = useState(false);
  const [modalIsOpenSecond, setModalIsOpenSecond] = useState(false);
  const [modalIsOpenThird, setModalIsOpenThird] = useState(false);

  return (
    <div>
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Products
              </h2>
              <h3 className="section-subheading text-muted">
                NewAge Garage Pro and Bold Series
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img onClick ={() => setModalIsOpenFirst(true)}
                  className="mx-auto rounded-circle"
                  src={require("../assets/img/grey.jpg")}
                  alt=""
                />
                <Modal isOpen={modalIsOpenFirst} onRequestClose={() => setModalIsOpenFirst(false)}>
                  <h2>This is Our Best Seller Product</h2>
                </Modal>
                <h4>Pro Cabinet</h4>
                <p className="text-muted">Grey</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img onClick ={() => setModalIsOpenSecond(true)}
                  className="mx-auto rounded-circle"
                  src={require("../assets/img/red.jpg")}
                  alt=""
                />
                <Modal isOpen={modalIsOpenSecond} onRequestClose={() => setModalIsOpenSecond(false)}>
                  <h2>Get Variety of Colour Options</h2>
                </Modal>

                <h4>Bold Cabinet</h4>
                <p className="text-muted">Red</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img onClick ={() => setModalIsOpenThird(true)}
                  className="mx-auto rounded-circle"
                  src={require("../assets/img/black.jpg")}
                  alt=""
                />
                <Modal isOpen={modalIsOpenThird} onRequestClose={() => setModalIsOpenThird(false)}>
                  <h2>Our New Premium Cabinets</h2>
                </Modal>

                <h4>Pro Series</h4>
                <p className="text-muted">Black</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src={require("../assets/img/logos/envato.jpg")}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src={require("../assets/img/logos/designmodo.jpg")}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src={require("../assets/img/logos/themeforest.jpg")}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src={require("../assets/img/logos/creative-market.jpg")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <SlickSlider/>
    </div>
    
    );
}

export default Team;
