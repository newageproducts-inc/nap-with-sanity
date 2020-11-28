import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

function Services() {
  return (
    <div>

      <section className="page-section" id="services">
        <div className="container">
          <div className="">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="service-block text-center">
            <Card className="col-sm-4">
              <CardContent>
                <div className="">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">E-Commerce</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="col-sm-4">
              <CardContent>
                <div className="">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">E-Commerce</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-sm-4">
              <CardContent>
                <div className="">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">E-Commerce</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
