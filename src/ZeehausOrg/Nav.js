import React, { Component } from 'react'
import './style.css'

export default class Nav extends Component {
  render () {
    return (
      <div className="org-nav">
        <div className="org-nav-top">
          <a href="https://zeehaus.com">
            <img src="https://s3-us-west-2.amazonaws.com/pinta-digital/production/Images/logos/zeehaus_logo.png" />
          </a>
        </div>
        <div className="org-nav-bottom">
          <div className="org-nav-element">
            <a href="https://zeehaus.com/coin">Zeehaus Coin</a>
          </div>
          <div className="org-nav-element">
            <a href="">Blockchain</a>
            <div>
              <a href="https://zeehaus.com/risk_and_protection#blockchain">
                Property & Protection
              </a>
              <a href="https://zeehaus.com/blockchain">Public Ledger</a>
            </div>
          </div>
          <div className="org-nav-element">
            <a href="https://zeehaus.com/sign_up/community">Buy Coins</a>
          </div>
          <div className="org-nav-element">
            <a href="https://zeehaus.com/about_us">About Zeehaus</a>
          </div>
          <div className="org-nav-element">
            <a href="https://zeehaus.com/sign_up/community">FAQ</a>
          </div>
          <div className="org-nav-element">
            <a href="https://zeehaus.com/submit_inquiry#coin">Contact Us</a>
          </div>
        </div>
      </div>
    )
  }
}
