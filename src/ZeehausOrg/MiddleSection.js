import React, { useState } from "react";
import { Col, Grid, Row } from 'react-flexbox-grid'
import PopupPage from './PopupPage';
import SectionLogo from "./SectionLogo";

export default function MiddleSection () {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
      <div>
        <Grid>
          <Row className="org-section" middle="xs" center="xs">
            <Col xs={12} className="text">
              <SectionLogo />
              <h1 className="center">
                Equity Sharing, Zeehaus Coins (ZEH), and Blockchain
              </h1>
              <h3>
                Real estate is ready for disruption. We have a unique approach
                to deal with our housing crisis.
              </h3>
              <span className="gray-line" />

              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{ padding: 0, paddingTop: "2rem" }}
                >
                  <div className="org-card">
                    <div>
                      <h1>Good Social Cause</h1>
                      <p>
                        We plan to help thousands of young buyers achieve
                        homeownership.
                      </p>
                    </div>
                    <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{ padding: 0, paddingTop: "2rem" }}
                >
                  <div className="org-card">
                    <div>
                      <h1>Finally, a Long-Term Solution</h1>
                      <p>
                        Our ownership model and technical platform solve the
                        liquidity issue, lower costs, and enable everyone to own
                        real estate.
                      </p>
                    </div>
                    <img src="https://images.pexels.com/photos/4792503/pexels-photo-4792503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{ padding: 0, paddingTop: "2rem" }}
                >
                  <div className="org-card">
                    <div>
                      <h1>Economically Sustainable</h1>
                      <p>
                        <span
                          className="link"
                          onClick={() => setPopupOpen(true)}
                        >
                          Equity sharing
                        </span>{" "}
                        & funding from token sales means no subsidy needed from
                        homebuilder or government.
                      </p>
                    </div>
                    <img
                      alt="s"
                      src="https://images.pexels.com/photos/7172858/pexels-photo-7172858.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    />
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{ padding: 0, paddingTop: "2rem" }}
                >
                  <div className="org-card">
                    <div>
                      <h1>Help Everyone Purchase Rental Properties</h1>
                      <p>
                        Instead of buying full property or nothing at all, there
                        is a better way: Own a portion and{" "}
                        <a href="https://zeehaus.com/common/equity_sharing" rel='noopener noreferrer' target={'_blank'}>share equity</a> &
                        expenses
                      </p>
                    </div>
                    <img
                      alt="s"
                      src="https://images.pexels.com/photos/4670707/pexels-photo-4670707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            {/* <Col xs={12} md={6}>
              <img
                style={{ height: '60vh' }}
                className="org-section-img"
                src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </Col> */}
          </Row>
        </Grid>
        <PopupPage open={popupOpen} toggle={() => setPopupOpen(false)}>
          <p>
            Zeehaus is a web platform, and one of its main programs is designed
            to pair homebuyers who do not want a mortgage with Investors hoping
            to profit from home future appreciation. This type of arrangement is
            called equity sharing. In addition to providing a platform for the
            initial pairing and funding, Zeehaus provides the organizational
            structure and legal documentation for the relationships between
            homebuyers and Investors, and manages these relationships throughout
            the equity share.
          </p>
          <p>
            Zeehaus does not “manage” any property. Instead, it manages the
            relationship between investors and property owners and provides
            investors with the technology and digital platform to simplify the
            ownership and investment experiences, while ensuring the correct
            processes are followed, legal documentation is filed, and ownership
            structure is enforced. Thus, it enables buying small fractions of
            property possible with multiple investors / co-owners, without
            managing the property itself.{" "}
          </p>
        </PopupPage>
      </div>
    );
}
