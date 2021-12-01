import React from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { Tab, Tabs, getSVG } from "./Element";

export default function ThirdSection () {
    return (
      <div>
        <Grid>
          <Row className="org-section" middle="xs" center="xs">
            <Tabs v5>
              <Tab label="Nonprofit">
                <Col xs={12} className="text">
                  <h1>Help Achieve Homeownership</h1>
                  <h3>
                    We are a new real estate ecosystem, leveraging the equity
                    sharing platform and Zeehaus coins, to bring a sustainable
                    way to lower barriers to both real estate ownership and
                    investment.
                  </h3>
                  <h3>
                    All proceeds from Zeehaus coins sold are held and
                    distributed by the Zeehaus Organization to help homebuyers
                    purchase their homes.
                  </h3>
                  <span className="gray-line" />
                </Col>
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: 0, paddingTop: '2rem' }}
                  >
                    <div className="org-card-vert">
                      <div>
                        <h1>Zeehaus Coin (“HAUS”)</h1>
                        <p>
                          Zeehaus coin is a cryptocurrency stored on the Stellar
                          blockchain ledger, with the primary goal of helping
                          homebuyers and investors purchase properties.
                        </p>
                      </div>
                      {getSVG('secure_blockchain', {
                        height: 100,
                        marginTop: '3rem',
                        width: 'auto',
                      })}
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: 0, paddingTop: '2rem' }}
                  >
                    <div className="org-card-vert">
                      <div>
                        <h1>Homeownership</h1>
                        <p>
                          Nonprofit: Proceeds from all HAUS coins sold go to the
                          nonprofit organization, Zeehaus Foundation Inc. HAUS
                          coins are sold via a public exchange and/or on the
                          Zeehaus platform. The holders of Zeehaus coins could
                          decide to sell the coins and use the USD to invest if
                          the coin price is higher than $1.
                        </p>
                      </div>
                      {getSVG('invest2', {
                        height: 100,
                        marginTop: '3rem',
                        width: 'auto',
                      })}
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: 0, paddingTop: '2rem' }}
                  >
                    <div className="org-card-vert">
                      <div>
                        <h1>Equity Sharing Benefits</h1>
                        <p>
                          Equity sharing offers an opportunity to become a
                          homeowner with as little as 5% equity with a simple
                          and quick buying process. Lower housing payments with
                          an opportunity for mortgage financing in three (3)
                          years.
                        </p>
                      </div>
                      {getSVG('chart', {
                        height: 100,
                        marginTop: '3rem',
                        width: 'auto',
                      })}
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: 0, paddingTop: '2rem' }}
                  >
                    <div className="org-card-vert">
                      <div>
                        <h1>Investing in Equity Sharing</h1>
                        <p>
                          By giving investors home equity, we can reduce a
                          buyer’s monthly payments while still providing
                          investors with a transparent way to invest at a much
                          lower threshold (starting at $100) compared with
                          traditional rental investment properties.
                        </p>
                      </div>
                      {getSVG('invest', {
                        height: 100,
                        marginTop: '3rem',
                        width: 'auto',
                      })}
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab label="Understand Zeehaus Coins">
              </Tab>
              <Tab label="How to Buy HAUS Coins"></Tab>
            </Tabs>
          </Row>
        </Grid>
      </div>
    )
}
