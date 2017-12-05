import React, { Component } from 'react';
class Gallery extends Component {
  render() {
    return (
      <div>
        <section className="no-padding" id="portfolio">
            <div className="container-fluid">
                <div className="row no-gutter popup-gallery">
                    <div className="col-lg-4 col-sm-6">
                        <a href="img/portfolio/fullsize/1.jpg" className="portfolio-box">
                            <img src="img/portfolio/thumbnails/1.jpg" className="img-responsive" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Category
                                    </div>
                                    <div className="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a href="img/portfolio/fullsize/2.jpg" className="portfolio-box">
                            <img src="img/portfolio/thumbnails/2.jpg" className="img-responsive" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Category
                                    </div>
                                    <div className="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a href="img/portfolio/fullsize/3.jpg" className="portfolio-box">
                            <img src="img/portfolio/thumbnails/3.jpg" className="img-responsive" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Category
                                    </div>
                                    <div className="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a href="img/portfolio/fullsize/4.jpg" className="portfolio-box">
                            <img src="img/portfolio/thumbnails/4.jpg" className="img-responsive" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Category
                                    </div>
                                    <div className="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a href="img/portfolio/fullsize/5.jpg" className="portfolio-box">
                            <img src="img/portfolio/thumbnails/5.jpg" className="img-responsive" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Category
                                    </div>
                                    <div className="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a href="img/portfolio/fullsize/6.jpg" className="portfolio-box">
                            <img src="img/portfolio/thumbnails/6.jpg" className="img-responsive" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Category
                                    </div>
                                    <div className="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
export default Gallery;