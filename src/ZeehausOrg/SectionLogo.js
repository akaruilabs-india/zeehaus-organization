import React from 'react'
import Text from './../Icon.png'
import Coin from "./../coin.png";

export default function SectionLogo({ justCoin, asBack }) {
  return (
    <div>
      {justCoin && (
        <img
          className={asBack ? "coin-back" : ""}
          src={Coin}
          width="150px"
          alt="2"
        />
      )}
      {!justCoin && <br />}
      {!justCoin && <img src={Text} width="350px" alt="2" />}
    </div>
  );
}

