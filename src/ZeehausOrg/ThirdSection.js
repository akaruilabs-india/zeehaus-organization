import React, { useState } from "react";
import { Col, Grid, Row } from 'react-flexbox-grid'
import CorFooter from "./CorFooter";
import { Tab, Tabs, getSVG } from "./Element";
import MobileDetect from "mobile-detect";
import ExtraContent from "./ExtraContent";
import List from "./List";
import PopupPage from "./PopupPage";
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
export const coinLaunchDate = new Date("April 1, 2022").getTime();
export const currentDate = new Date().getTime()
export const equityDate = new Date("January 1, 2022").getTime()


export default function ThirdSection () {
    const [iframeLoaded, setIframeLoaded] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false)
    return (
      <div>
        <Grid>
          <Row className="org-section" middle="xs" center="xs">
            <Tabs v5 style={{ width: "100%" }}>
              <Tab label="Nonprofit">
                <Col xs={12} className="text">
                  <h1 className="center">Help Achieve Homeownership</h1>
                  <h3>
                    We are a new real estate ecosystem, leveraging the{" "}
                    <span className="link" onClick={() => setPopupOpen(true)}>
                      equity sharing
                    </span>{" "}
                    platform and Zeehaus coins, to bring a sustainable way to
                    lower barriers to both real estate ownership and investment.
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
                    style={{ padding: 0, paddingTop: "2rem" }}
                  >
                    <div className="org-card-vert">
                      <div>
                        <h1>Zeehaus Coin (“HAUS”)</h1>
                        <p>
                          Zeehaus coin is a cryptocurrency stored on the{" "}
                          <a href="https://www.stellar.org/">
                            Stellar blockchain ledger
                          </a>
                          , with the primary goal of helping homebuyers and
                          investors purchase properties.
                        </p>
                        <ExtraContent>
                          <List>
                            Unlike most digital tokens that have no intrinsic
                            value, Zeehaus coins are backed by cash deposits and
                            assets.
                          </List>
                          <List>
                            All proceeds from Zeehaus coins sold = number of
                            property shares purchased on the Zeehaus portal +
                            funds in custody.
                          </List>
                        </ExtraContent>
                      </div>
                      {getSVG("secure_blockchain", {
                        height: 100,
                        marginTop: "3rem",
                        width: "auto",
                      })}
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: 0, paddingTop: "2rem" }}
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
                        <ExtraContent>
                          <List>
                            Coins Backed by Assets: The price of the Zeehaus
                            coins is not tied to asset prices, but the coins are
                            backed by cash deposits and assets, as each coin can
                            be used to redeem and invest in one share of{" "}
                            <a href="https://zeehaus.com/common/equity_sharing">
                              equity Sharing properties.
                            </a>
                          </List>
                          <List>
                            Homeownership: All proceeds from coins sold are held
                            by the nonprofit organization (Zeehaus Foundation
                            Inc) to help homebuyers achieve homeownership.
                          </List>
                          <List>
                            Rental Income: For any shares not bought/redeemed by
                            coin holders, profits and rental income from equity
                            sharing investments will go to the nonprofit
                            organization (Zeehaus Foundation Inc.) to cover
                            operating expenses.
                          </List>
                          <List>
                            Re-Invest: When a property is sold or bought out by
                            the homeowner, for each property share, $1 per
                            property share sold will be re-invested by the
                            nonprofit to help more homebuyers.
                          </List>
                        </ExtraContent>
                      </div>
                      {getSVG("invest2", {
                        height: 100,
                        marginTop: "3rem",
                        width: "auto",
                      })}
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: 0, paddingTop: "2rem" }}
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
                        <ExtraContent>
                          <List>
                            Affordable housing (Below Market Units) is
                            unsustainable as it requires subsidies from
                            governments or homebuilders. Either these subsidies
                            come from taxpayers, or higher prices get passed on
                            to other homebuyers & homeowners.
                          </List>
                          <List>
                            Low down payment mortgage option, such as 3% FHA
                            loans, is generally more difficult to qualify and
                            less competitive against other buyers, and it often
                            requires mortgage protection insurance (PMI) and
                            higher interest rates than conventional loans.
                          </List>
                          <List>
                            <a href="https://zeehaus.com/common/equity_sharing">
                              Equity Sharing ownership
                            </a>{" "}
                            solves these problems as investors receive property
                            equity in exchange for allowing the homebuyer to own
                            a home with just 5% equity and these benefits:
                          </List>
                          <List type={2}>
                            A{" "}
                            <a href="https://zeehaus.com/buyers#calc">
                              lower monthly payment
                            </a>
                          </List>
                          <List type={2}>
                            Additional time to{" "}
                            <a href="https://zeehaus.com/common/additional_equity">
                              accumulate more equity
                            </a>
                          </List>
                          <List type={2}>
                            Option for mortgage financing in{" "}
                            <a href="https://zeehaus.com/common/buy_out">
                              three (3) years.
                            </a>
                          </List>
                        </ExtraContent>
                      </div>
                      {getSVG("chart", {
                        height: 100,
                        marginTop: "3rem",
                        width: "auto",
                      })}
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ padding: 0, paddingTop: "2rem" }}
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
                        <ExtraContent>
                          <List>
                            <a href="https://zeehaus.com/common/investment_fee">
                              Low-cost investment
                            </a>
                             – Buy and sell equity sharing ownership publicly at
                            a fraction of the costs compared with investing in
                            traditional rental properties.
                          </List>
                          <List>
                            Liquidity – Investment in equity sharing ownership
                            on the Zeehaus platform leverages the best of both
                            worlds in real estate with liquidity and benefits of
                            actual ownership.
                          </List>
                          <List>
                            Tax benefits – Invest in shared equity ownership
                            directly or through pass-through asset-holding
                            entity, such as Trust, offers potential tax benefits
                            such as depreciation deduction and capital gain
                            treatment of income. Please note that when investing
                            in owner-occupied Equity Sharing investment, the
                            income you receive may have tax impacts on your
                            financial situation. Please consult with a tax
                            advisor before investing. 
                          </List>
                        </ExtraContent>
                      </div>
                      {getSVG("invest", {
                        height: 100,
                        marginTop: "3rem",
                        width: "auto",
                      })}
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab label="Understand Zeehaus Coins">
                {!iframeLoaded && <h3>Just a moment...</h3>}
                <iframe
                  title="Understand Zeehaus Coins"
                  frameBorder="0"
                  height="1800"
                  width="100%"
                  onLoad={() => setIframeLoaded(true)}
                  scrolling="no"
                  src={"https://zeehaus.com/coin/zeehausorg"}
                />
              </Tab>
              <Tab label="How to Buy HAUS Coins">
                <br />
                <h1 className="center">How to Buy HAUS Coins</h1>
                <br />
                <span className="gray-line" />
                <br />
                <br />
                {!iframeLoaded && <h3>Just a moment...</h3>}
                <iframe
                  title="How to Buy HAUS Coins"
                  frameBorder="0"
                  height="400"
                  onLoad={() => setIframeLoaded(true)}
                  width="100%"
                  scrolling="no"
                  src={"https://zeehaus.com/org/coin_property_purchase"}
                />
              </Tab>
            </Tabs>
          </Row>
          <CorFooter
            firstIcon={<span className="fa fa-question-circle-o" />}
            firstData={
              <p>
                Have Questions? Email us at info@zeehausfoundation.org or submit
                an online inquiry{" "}
                <a href="/submit_inquiry#coin" className="link">
                  here
                </a>
                .
              </p>
            }
            thirdIcon={
              <span
                style={{ fontSize: isMobile ? "2rem" : "" }}
                className="fa fa-users"
              />
            }
            thirdData={
              <p style={{ fontSize: "16px", margin: "20px 0" }}>
                {equityDate <= currentDate ? (
                  <span>
                    Ready to buy your dream house?
                    <a className="link" href="/sign_up/buyer">
                      Join here
                    </a>{" "}
                  </span>
                ) : coinLaunchDate <= currentDate ? (
                  <span>
                    <a className="link" href="/sign_up/community">
                      Join here
                    </a>{" "}
                    and buy Zeehaus Coins.
                  </span>
                ) : (
                  <span>
                    <a className="link" href="/sign_up/community">
                      Join here
                    </a>{" "}
                    and you will be one of the first to know when we launch the
                    Zeehaus Coin purchase program.
                  </span>
                )}
              </p>
            }
            secondIcon={
              <span
                style={{ fontSize: isMobile ? "2rem" : "" }}
                className="fa fa-list"
              />
            }
            secondData={
              <p>
                For additional information on the program, please visit the{" "}
                <a href="/faq?q=458" className="link" target="_blank">
                  FAQs
                </a>
                .
              </p>
            }
          />
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
