import React, { Component } from 'react';
class Services extends Component {
  render() {
    return (
      <div>
        <section id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">At Your Service</h2>
                        <hr className="primary" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-diamond text-primary sr-icons"></i>
                            <h3>Sturdy Templates</h3>
                            <p className="text-muted">Our templates are updated regularly so they don't break.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                            <h3>Ready to Ship</h3>
                            <p className="text-muted">You can use this theme as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                            <h3>Up to Date</h3>
                            <p className="text-muted">We update dependencies to keep things fresh.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                            <h3>Made with Love</h3>
                            <p className="text-muted">You have to make your websites with love these days!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
export default Services;