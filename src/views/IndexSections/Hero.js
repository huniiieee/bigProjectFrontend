/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Carousel from "views/IndexSections/Carousel.js";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
   handleScrollToTabs = () => {
    // 버튼 클릭 시 전달받은 onScrollToTabs 호출
    this.props.onScrollToTabs();
  };
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped" >
            {/* Background circles */}
            <div className="shape shape-style-1 shape-dark">
              {/* <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" /> */}
            </div>
              <Container className="shape-container d-flex align-items-center py-lg" >
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="15">
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/mozit.png")}
                      style={{ width: "200px" }}
                    />
                    <p className="lead text-white">
                      간략한 소개 내용
                    </p> */}
                    <Carousel />
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="/login-page"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-user-run" />
                        </span>
                        <span className="btn-inner--text">로그인 하고 시작</span>
                      </Button>{" "}
                      </div>
                      <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        onClick={this.handleScrollToTabs} // 요금제 알아보기 버튼 클릭 시 Tabs로 이동
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-diamond" />
                        </span>
                        <span className="btn-inner--text">
                          요금제 알아보기
                        </span>
                      </Button>
                    </div>
                    {/* <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      />
                    </div> */}
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
