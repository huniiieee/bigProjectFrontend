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

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Carousel from "views/IndexSections/Carousel.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
              <section className="section section-shaped">
                  <div className="shape shape-style-1 shape-dark">
                    {/* <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span /> */}
                  </div>
                  <Container className="py-md">
                    <Row className="justify-content-between align-items-center">
                      <Col className="mb-5 mb-lg-0" lg="30">
                        <h1 className="text-white font-weight-light "style={{ marginTop: "100px" }}>
                          Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        </h1>
                      </Col>
                    </Row>
                  </Container>
                  {/* SVG separator */}
                  <div className="separator separator-bottom separator-skew">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      version="1.1"
                      viewBox="0 0 2560 100"
                      x="0"
                      y="0"
                    >
                    </svg>
                  </div>
                </section>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0" style={{ height: "700px" } }>
            {/* Circles background */}
            <div 
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)", // 4열
                gridGap: "20px", // 이미지 간의 간격
                gridRowGap: "100px", // 1행과 2행 간의 간격
                margin: "20px", // 전체 컨테이너 여백
            }}
            >
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                src={require("assets/img/theme/team-4-800x800.jpg")}
                className="rounded-circle"
                alt="Image 1"
                style={{
                    width: "60%",
                    height: "auto",
                    display: "block", // 이미지를 div 크기에 맞게 꽉 차도록 설정
                }}
                />
            </div>
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                src={require("assets/img/theme/team-4-800x800.jpg")}
                className="rounded-circle"
                style={{
                    width: "60%",
                    height: "auto",
                    display: "block",
                }}
                />
            </div>
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                src={require("assets/img/theme/team-4-800x800.jpg")}
                className="rounded-circle"
                alt="Image 3"
                style={{
                    width: "60%",
                    height: "auto",
                    display: "block",
                }}
                />
            </div>
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                src={require("assets/img/theme/team-4-800x800.jpg")}
                className="rounded-circle"
                alt="Image 4"
                style={{
                    width: "60%",
                    height: "auto",
                    display: "block",
                }}
                />
            </div>
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                src={require("assets/img/theme/team-4-800x800.jpg")}
                className="rounded-circle"
                alt="Image 5"
                style={{
                    width: "60%",
                    height: "auto",
                    display: "block",
                }}
                />
            </div>
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                src={require("assets/img/theme/team-4-800x800.jpg")}
                className="rounded-circle"
                alt="Image 6"
                style={{
                    width: "60%",
                    height: "auto",
                    display: "block",
                }}
                />
            </div>
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                src={require("assets/img/theme/team-4-800x800.jpg")}
                className="rounded-circle"
                alt="Image 7"
                style={{
                    width: "60%",
                    height: "auto",
                    display: "block",
                }}
                />
            </div>
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                src={require("assets/img/theme/team-4-800x800.jpg")}
                className="rounded-circle"
                alt="Image 8"
                style={{
                    width: "60%",
                    height: "auto",
                    display: "block",
                }}
                />
            </div>
    </div>
            <div className="shape shape-style-1 shape-default alpha-4">
              {/* <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span /> */}
            </div>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew">
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
            </div> */}
          </section>
          {/* <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Jessica Jones{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section> */}
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
