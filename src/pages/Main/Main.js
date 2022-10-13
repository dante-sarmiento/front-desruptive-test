/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import CircleGraphic from '../../components/graphics/CircleGraphic/CircleGraphic';
import { useCoinsContext } from '../../provider/CoinsProvider';

const Main = () => {
  const coins = useCoinsContext();
  const [sendGraphic, setSendGraphic] = useState(false);

  return (
    <div>
      <div>
        <h1>Valor top 5 monedas del mercado</h1>
        <ul>
          {coins.map(coin => (
            <li key={coin?.id}>{coin?.name} : {coin?.metrics?.marketcap?.current_marketcap_usd}</li>
          ))}
        </ul>
      </div>
      <div>

        <button type='submit' onClick={() => setSendGraphic(true)}
        >Ver porcentaje de cada moneda en el mercado</button>
        {sendGraphic ? (
          <CircleGraphic />
        ) : ('')}
      </div>
    </div>
  );
};

export default Main;
