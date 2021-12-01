import React from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'

export default function MiddleSection () {
    return (
      <div>
        <Grid>
          <Row className="org-section" middle="xs" center="xs">
            <Col xs={12} className="text">
              <h1>Equity Sharing, Zeehaus Coins, and Blockchain</h1>
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
                  style={{ padding: 0, paddingTop: '2rem' }}
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
                  style={{ padding: 0, paddingTop: '2rem' }}
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
                  style={{ padding: 0, paddingTop: '2rem' }}
                >
                  <div className="org-card">
                    <div>
                      <h1>Economically Sustainable</h1>
                      <p>
                        Equity sharing & funding from token sales means no
                        subsidy needed from homebuilder or government.
                      </p>
                    </div>
                    <img src="https://images.pexels.com/photos/7172858/pexels-photo-7172858.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{ padding: 0, paddingTop: '2rem' }}
                >
                  <div className="org-card">
                    <div>
                      <h1>Help Everyone Buy and Invest in Real Estate</h1>
                      <p>
                        Instead of buying full property or nothing at all, there
                        is a better way: Own a portion and share equity &
                        expenses.
                      </p>
                    </div>
                    <img src="https://images.pexels.com/photos/4670707/pexels-photo-4670707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
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
      </div>
    )
}
