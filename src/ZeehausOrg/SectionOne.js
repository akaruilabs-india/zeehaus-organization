import React from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'

export default function SectionOne () {
  return (
    <div>
      <Grid>
        <Row className="org-section" middle="xs">
          <Col xs={12} md={6} className="text">
            <h1>Zeehaus Foundation Mission</h1>
            <span className="gray-line" />

            <Row>
              <Col xs={12} sm={12} md={8} style={{padding: 0, paddingTop: '2rem'}}>
                <p>
                  Our mission is to help solve the housing crisis facing our
                  community by building a sustainable model for homeownership.
                </p>
                <p>
                  With Zeehaus Coins, we are here to build a new way to lower
                  the burdens of owning a home and enable everyone to invest in
                  real estate.
                </p>
                <p>
                  Explore how Zeehaus uses innovative technologies, blockchain,
                  and Zeehaus Coins to help achieve homeownership!
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <img
              style={{height: '60vh'}}
              className="org-section-img"
              src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
