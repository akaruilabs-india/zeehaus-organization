import React, { useState, useEffect } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import CorFooter from "./CorFooter";
import { Tab, Tabs, getSVG } from "./Element";
import MobileDetect from "mobile-detect";
import ExtraContent from "./ExtraContent";
import List from "./List";
import PopupPage from "./PopupPage";
import { CRYPTO_TRANSFER_MAX_LIMIT, EXTERNAL_EXCHANGE_LISTS, HAUS_TO_NFT_RATE_DESC } from "../Vars";
import commaNumber from "comma-number";
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
export const coinLaunchDate = new Date("April 1, 2022").getTime();
export const currentDate = new Date().getTime();
export const equityDate = new Date("January 1, 2022").getTime();

export default function ThirdSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [iframeOne, setIframeOne] = useState();
  const [iframeTwo, setIframeTwo] = useState();
  const messaging = {};

  useEffect(() => {
    window.onmessage = handleIframeMessage;
    iframeOne?.contentWindow.postMessage("hello", "*");
    console.log(iframeTwo);
  }, [iframeOne, iframeTwo, iframeLoaded]);

  const handleIframeMessage = (e) => {
    // console.log("EEEE", e.data);
    let { data } = e;
    if (data && ["two", "one", "three", "four"].includes(data)) {
      console.log("message", data);
      setPopupOpen(data);
    }
  };

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
                  lower barriers to rental properties and homeownership.
                </h3>

                <h3>
                  All proceeds from Zeehaus coins sold are held and distributed
                  by the Zeehaus Organization to help homebuyers purchase their
                  homes.
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
                      <h1>Zeehaus Coin (“ZEH”)</h1>
                      <p>
                        Zeehaus coin is a{" "}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://www.zeehaus.com/common/dao"
                        >
                          decentralized
                        </a>
                        digital token, created by Zeehaus for the nonprofit,
                        Zeehaus Foundation Inc, with the primary goal of helping
                        homebuyers and coin holders purchase properties.
                      </p>

                      <ExtraContent>
                        <List>
                          Different from typical digital tokens, Zeehaus coins
                          are truly backed by assets as they can be used to
                          redeem for{" "}
                          <a href="https://zeehaus.com/common/nft_and_zeehaus_coin">
                            Non-Fungible Tokens (NFT)
                          </a>
                          , which represent ownership of a property.
                        </List>

                        <List>
                          All funds from Zeehaus coins sold (and handled
                          strictly by decentralized{" "}
                          <a href="https://zeehaus.com/common/dao">
                            Zeehaus DAO
                          </a>
                          ) = number of property shares (representing an equal
                          number of NFT tokens issued) on Zeehaus portal +{" "}
                          <a href="https://zeehaus.com/common/custody_and_refund">
                            unused funds in custody
                          </a>
                          ) (held by nonprofit Zeehaus Foundation on the
                          decentralized DAO).
                        </List>
                        <List>
                          ZEH Adoption: We also hope the transparency,
                          decentralization, and asset-backed nature of Zeehaus
                          Coins can bring trust to the real estate community and
                          beyond, which could in turn maximize its utility
                          potential and become widely adopted outside of Zeehaus
                          as a payment tool for a variety of goods and services,
                          particularly in real estates, such as paying for
                          services, real estate commissions, advertising, and
                          potentially real estate transactions.
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
                        Nonprofit: Proceeds from all ZEH coin sales or auctions
                        are stored in the treasury of the nonprofit
                        organization, Zeehaus Foundation Inc and handled
                        strictly by the{" "}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://zeehaus.com/common/dao"
                        >
                          Zeehaus DAO
                        </a>
                        . The holders of Zeehaus coins can use them to purchase
                        fractional equity sharing properties through the
                        ownership of{" "}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://zeehaus.com/common/nft"
                        >
                          NFT tokens
                        </a>
                        . Each Zeehaus coin can be used to purchase{" "}
                        {HAUS_TO_NFT_RATE_DESC}, which is the “Preset ZEH Coin
                        Price.”
                      </p>
                      <p>
                        “Preset ZEH Coin Price” will stay constant when
                        exchanging into NFT tokens on the Zeehaus platform. The
                        ratio will never change regardless of the price on any
                        open market.
                      </p>
                      <ExtraContent>
                        <List>
                          Coins Backed by Assets: The coins are backed by NFT
                          tokens, as each Zeehaus coin can be used to purchase
                          {HAUS_TO_NFT_RATE_DESC} of any available equity
                          sharing properties being offered on the Zeehaus
                          Investor platform, with each NFT Token representing $1
                          in ownership. Funds from the coin sales and net
                          incomes from{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zeehaus.com/common/equity_sharing"
                          >
                            equity sharing properties.
                          </a>{" "}
                          sold are held by the nonprofit organization (Zeehaus
                          Foundation Inc.) on the decentralized DAO and are
                          strictly used to help homebuyers purchase properties.
                        </List>
                        <List>
                          Homeownership: All proceeds from coins sold are held
                          by the nonprofit organization (Zeehaus Foundation Inc)
                          to help homebuyers achieve homeownership.
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
                        homeowner with as little as 5% equity with a simple and
                        quick buying process. Lower housing payments with an
                        opportunity for mortgage financing in three (3) years.
                      </p>
                      <ExtraContent>
                        <List>
                          Affordable housing (Below Market Units) is
                          unsustainable as it requires subsidies from
                          governments or homebuilders. Either these subsidies
                          come from taxpayers, or higher prices get passed on to
                          other homebuyers & homeowners.
                        </List>
                        <List>
                          Low down payment mortgage option, such as 3% FHA
                          loans, is generally more difficult to qualify and less
                          competitive against other buyers, and it often
                          requires mortgage protection insurance (PMI) and
                          higher interest rates than conventional loans.
                        </List>
                        <List>
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zeehaus.com/common/equity_sharing"
                          >
                            Equity Sharing ownership
                          </a>{" "}
                          solves these problems as investors receive property
                          equity in exchange for allowing the homebuyer to own a
                          home with just 5% equity and these benefits:
                        </List>
                        <List type={2}>
                          A{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zeehaus.com/buyers#calc"
                          >
                            lower monthly payment
                          </a>
                        </List>
                        <List type={2}>
                          Additional time to{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zeehaus.com/common/additional_equity"
                          >
                            accumulate more equity
                          </a>
                        </List>
                        <List type={2}>
                          Option for mortgage financing in{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zeehaus.com/common/buy_out"
                          >
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
                      <h1>Buying Fractional Rental Properties</h1>
                      <p>
                        By sharing home equity, we can reduce a buyer’s monthly
                        payments while still providing a transparent way to
                        purchase fractional ownership at a much lower threshold
                        (starting at $100) compared with traditional rental
                        investment properties.
                      </p>
                      <ExtraContent closeLabel="Additional Fraction Owner Benefits">
                        <List>
                          Transaction costs  – Buy and sell equity sharing
                          ownership on Zeehaus.com at a{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zeehaus.com/common/investment_fee"
                          >
                            fraction of the costs
                          </a>{" "}
                          compared with owning traditional rental properties.
                        </List>
                        <List>
                          Liquidity – Fractional equity sharing ownership on the
                          Zeehaus platform leverages the best of both worlds in
                          real estate with potential liquidity and benefits of
                          actual ownership.
                        </List>
                        <List>
                          Tax benefits – Fractional ownership in rental
                          properties, through a pass-through asset-holding
                          entity such as Trust, offers potential tax benefits
                          such as depreciation deduction and capital gain
                          treatment of income. Please note that through
                          owner-occupied fractional property ownership, the
                          income you receive may have tax impacts on your
                          financial situation. Please consult with a tax advisor
                          before investing. 
                        </List>
                        <List>
                          Purchasing Zeehaus coins does not entitle the owner of
                          the coins to purchase fractional properties on Zeehaus
                          automatically. Prior to buying properties, each holder
                          of Zeehaus coins is required to provide your US-issued
                          Social Security Number (SSN) or Tax ID, upload ID
                          documents, and complete Know-Your-Customer (KYC) and
                          Anti-Money Laundering (AML) verifications if you
                          purchased Zeehaus coins on a public exchange or
                          third-party auction site. If you are unable or
                          unwilling to provide a valid SSN (or Tax ID), pass the
                          KYC verifications, and follow the rules and
                          limitations of the Zeehaus platform (which may change
                          from time to time), you may not be allowed to purchase
                          even if you hold Zeehaus coins.
                        </List>
                        <List>
                          Monthly Limits: Please note that, as part of our
                          Anti-Money Laundering (AML) policy, there is a monthly
                          limit of ${commaNumber(CRYPTO_TRANSFER_MAX_LIMIT)}{" "}
                          when using ZEH coins to redeem and purchase equity
                          sharing properties. When buying Zeehaus Coins on a
                          third-party exchange or auction site, you will be
                          subject to its respective rules and limitations
                          regarding account verification, user payment methods,
                          and limits in the purchase, sale, and transfer.
                        </List>
                        <List>
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zeehaus.com/common/coin_property_purchase"
                          >
                            Learn more
                          </a>{" "}
                          about the limitation and rules of using ZEH Coins to
                          buy fractional ownership.
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
                ref={(n) => setIframeOne(n)}
                title="Understand Zeehaus Coins"
                frameBorder="0"
                height="1900"
                width="100%"
                {...messaging}
                onLoad={() => setIframeLoaded(true)}
                scrolling="no"
                src={
                  false
                    ? "http://localhost:3000/coin/zeehausorg"
                    : "https://zeehaus.com/coin/zeehausorg"
                }
              />
            </Tab>
            <Tab label="Use ZEH to Purchase Properties">
              <br />
              <h1 className="center">Use ZEH to Purchase Properties</h1>
              <br />
              <span className="gray-line" />
              <br />
              <br />
              {!iframeLoaded && <h3>Just a moment...</h3>}
              <iframe
                ref={(n) => setIframeTwo(n)}
                title="Use ZEH to Purchase Properties"
                frameBorder="0"
                height="1500"
                onLoad={() => setIframeLoaded(true)}
                {...messaging}
                width="100%"
                scrolling="no"
                src={
                  false
                    ? "http://localhost:3000/org/coin_property_purchase"
                    : "https://zeehaus.com/org/coin_property_purchase"
                }
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
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://zeehaus.com/submit_inquiry#coin"
                className="link"
              >
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
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link"
                    href="https://zeehaus.com/sign_up/applicant"
                  >
                    Join here
                  </a>{" "}
                </span>
              ) : coinLaunchDate <= currentDate ? (
                <span>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link"
                    href="https://zeehaus.com/sign_up/community"
                  >
                    Join here
                  </a>{" "}
                  and buy Zeehaus Coins.
                </span>
              ) : currentDate < coinLaunchDate &&
                EXTERNAL_EXCHANGE_LISTS === "None" ? (
                <span>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link"
                    href="https://zeehaus.com/sign_up/community"
                  >
                    Join here
                  </a>{" "}
                  and you will be one of the first to know when we launch the
                  Zeehaus Coin purchase program.
                </span>
              ) : currentDate < coinLaunchDate &&
                EXTERNAL_EXCHANGE_LISTS !== "None" ? (
                <span>
                  Zeehaus Coin can be purchased on a third-party auction or
                  token launch site: {EXTERNAL_EXCHANGE_LISTS}
                </span>
              ) : (
                <span />
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
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://zeehaus.com/faq?q=458"
                className="link"
              >
                FAQs
              </a>
              .
            </p>
          }
        />
      </Grid>
      <PopupPage open={popupOpen} toggle={() => setPopupOpen(false)}>
        {popupOpen === "one" ? (
          <div>
            {!iframeLoaded && <h3>Loading...</h3>}
            <iframe
              ref={(n) => setIframeOne(n)}
              title="Understand Zeehaus Coins"
              onLoad={() => setIframeLoaded(true)}
              frameBorder="0"
              height="1900"
              width="100%"
              scrolling="no"
              src={
                false
                  ? "http://localhost:3000/coin/dialog_one"
                  : "https://zeehaus.com/coin/dialog_one"
              }
            />
          </div>
        ) : popupOpen === "two" ? (
          <div>
            {!iframeLoaded && <h3>Loading...</h3>}
            <iframe
              ref={(n) => setIframeOne(n)}
              title="Understand Zeehaus Coins"
              onLoad={() => setIframeLoaded(true)}
              frameBorder="0"
              height="1900"
              width="100%"
              scrolling="no"
              src={
                false
                  ? "http://localhost:3000/coin/dialog_two"
                  : "https://zeehaus.com/coin/dialog_two"
              }
            />
          </div>
        ) : popupOpen === "three" ? (
          <div>
            {!iframeLoaded && <h3>Loading...</h3>}
            <iframe
              ref={(n) => setIframeOne(n)}
              title="Understand Zeehaus Coins"
              onLoad={() => setIframeLoaded(true)}
              frameBorder="0"
              height="1900"
              width="100%"
              scrolling="no"
              src={
                false
                  ? "http://localhost:3000/coin/dialog_three"
                  : "https://zeehaus.com/coin/dialog_three"
              }
            />
          </div>
        ) : popupOpen === "four" ? (
          <div>
            {!iframeLoaded && <h3>Loading...</h3>}
            <iframe
              ref={(n) => setIframeOne(n)}
              title="Understand Zeehaus Coins"
              onLoad={() => setIframeLoaded(true)}
              frameBorder="0"
              height="1900"
              width="100%"
              scrolling="no"
              src={
                false
                  ? "http://localhost:3000/coin/dialog_four"
                  : "https://zeehaus.com/coin/dialog_four"
              }
            />
          </div>
        ) : (
          <div>
            <p>
              Zeehaus is a web platform, and one of its main programs is
              designed to pair homebuyers who do not want a mortgage with
              Investors hoping to profit from home future appreciation. This
              type of arrangement is called equity sharing. In addition to
              providing a platform for the initial pairing and funding, Zeehaus
              provides the organizational structure and legal documentation for
              the relationships between homebuyers and Investors, and manages
              these relationships throughout the equity share.
            </p>
            <p>
              Zeehaus does not “manage” any property. Instead, it manages the
              relationship between investors and property owners and provides
              investors with the technology and digital platform to simplify the
              ownership and investment experiences, while ensuring the correct
              processes are followed, legal documentation is filed, and
              ownership structure is enforced. Thus, it enables buying small
              fractions of property possible with multiple investors /
              co-owners, without managing the property itself.{" "}
            </p>
          </div>
        )}
      </PopupPage>
    </div>
  );
}
