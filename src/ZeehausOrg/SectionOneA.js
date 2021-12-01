import React from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { List} from './Element'

export default function SectionOneA () {
    return (
      <div>
        <Grid>
          <Row className="org-section" middle="xs">
            <Col xs={12} md={6}>
              <img
                className="org-section-img"
                src="https://images.pexels.com/photos/1058958/pexels-photo-1058958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </Col>
            <Col xs={12} md={6} className="text">
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={8}
                  mdOffset={1}
                  style={{ padding: 0, paddingTop: '0rem' }}
                >
                  <h1>Today’s Challenges</h1>
                  <span className="gray-line" />
                  <h2>Challenges faced by buyers and real estate investors</h2>
                  <List>Digital Currency Risky & Volatile</List>
                  <List>Can’t Afford to Buy a Home</List>
                  <List>Significant Capital Required to Invest</List>
                  <br />
                  <h2>Industry-wide challenges</h2>
                  <List>
                    Millennials cut off home buying because of huge student
                    loans and lack of down payments.
                  </List>
                  <List>
                    Rising property values globally, resulting in a serious
                    housing crisis.
                  </List>
                  <List>
                    Lack of liquidity: real estate requires significant capital
                    & long-term commitments.
                  </List>
                  <List>
                    No easy way to invest in real estate, high-risk, complex
                    process for rental property.
                  </List>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
}
