import React from "react";
import { Row, Col } from "react-flexbox-grid";
import MobileDetect from "mobile-detect";
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

export default ({
  style,
  firstIcon,
  firstData,
  secondIcon,
  secondData,
  thirdIcon,
  thirdData,
  dual,
}) => {
  return (
    <Row
      start="xs"
      middle="xs"
      className="c-footer"
      style={{ marginLeft: "0rem", marginRight: "0rem", ...style }}
    >
      {firstData && (
        <Col
          xs={12}
          sm={12}
          md={dual ? 6 : 4}
          lg={dual ? 6 : 4}
          style={{
            borderRight: isMobile ? "" : "1px solid #ddd",
            padding: isMobile ? "0 20px" : "0 30px",
          }}
        >
          {firstData && (
            <div>
              <div
                className="c-footer-icon"
                style={{ width: dual ? "12%" : "20%" }}
              >
                {firstIcon}
              </div>
              <div className="c-footer-data">{firstData}</div>
            </div>
          )}
        </Col>
      )}
      {secondData && (
        <Col
          xs={12}
          sm={12}
          md={dual ? 6 : 4}
          lg={dual ? 6 : 4}
          style={{
            borderRight: isMobile ? "" : "1px solid #ddd",
            padding: isMobile ? "0 20px" : "0 30px",
          }}
        >
          {secondData && (
            <div>
              <div
                className="c-footer-icon"
                style={{ width: dual ? "12%" : "20%" }}
              >
                {secondIcon}
              </div>
              <div className="c-footer-data">{secondData}</div>
            </div>
          )}
        </Col>
      )}
      {thirdData && (
        <Col
          xs={12}
          sm={12}
          md={dual ? 6 : 4}
          lg={dual ? 6 : 4}
          style={{ padding: isMobile ? "0 20px" : "0 30px" }}
        >
          {thirdData && (
            <div>
              <div
                className="c-footer-icon"
                style={{ width: dual ? "12%" : "20%" }}
              >
                {thirdIcon}
              </div>
              <div className="c-footer-data">{thirdData}</div>
            </div>
          )}
        </Col>
      )}
    </Row>
  );
};
