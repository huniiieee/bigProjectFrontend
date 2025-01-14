/*!=========================================================
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
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Container, Row, Col, Alert } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Agree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceTerms: false,
      usageTerms: false,
      personalInfo: false,
      showToast: false, // 토스트 메시지 표시 여부
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  handleCheckAll = () => {
    this.setState({
      serviceTerms: true,
      usageTerms: true,
      personalInfo: true,
    });
  };

  isSubmitDisabled = () => {
    const { serviceTerms, usageTerms, personalInfo } = this.state;
    return !(serviceTerms && usageTerms && personalInfo);
  };

  handleSubmit = (event) => {
    const isDisabled = this.isSubmitDisabled();
    if (isDisabled) {
      event.preventDefault(); // 링크 이동 막기
      this.setState({ showToast: true });
    }
  };

  closeToast = () => {
    this.setState({ showToast: false });
  };

  render() {
    const { serviceTerms, usageTerms, personalInfo, showToast } = this.state;

    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <h1 className="mb-0">약관 동의</h1>
                      </div>
                      
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form">
                        <FormGroup>
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="serviceTerms"
                              name="serviceTerms"
                              type="checkbox"
                              checked={serviceTerms}
                              onChange={this.handleCheckboxChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="serviceTerms"
                            >
                              <span>서비스 약관 동의</span>
                            </label>
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="usageTerms"
                              name="usageTerms"
                              type="checkbox"
                              checked={usageTerms}
                              onChange={this.handleCheckboxChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="usageTerms"
                            >
                              <span>이용 약관 동의</span>
                            </label>
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="personalInfo"
                              name="personalInfo"
                              type="checkbox"
                              checked={personalInfo}
                              onChange={this.handleCheckboxChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="personalInfo"
                            >
                              <span>개인정보 수집 및 이용 동의</span>
                            </label>
                          </div>
                        </FormGroup>
                        <div className="text-center">
                           
                            <a
                            className={`btn btn-primary my-4`}
                            onClick={this.handleCheckAll}
                          >
                            전부 동의
                          </a>
                          <a
                            href="/register-page"
                            className={`btn btn-primary my-4 ${this.isSubmitDisabled() ? 'disabled' : ''}`}
                            onClick={this.handleSubmit}
                          >
                            동의 완료
                          </a>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  {showToast && (
                    <Alert color="danger" toggle={this.closeToast} className="mt-3">
                      <strong>모든 약관에 동의하셔야 합니다!</strong>
                    </Alert>
                  )}
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Agree;