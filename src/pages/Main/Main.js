/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import CircleGraphic from '../../components/graphics/CircleGraphic/CircleGraphic';
import { useCoinsContext } from '../../provider/CoinsProvider';

const Main = () => {
  const coins = useCoinsContext();
  const [sendGraphic, setSendGraphic] = useState(false);

  return (
    <div className='md:container md:mx-auto flex flex-row h-4/5 justify-center justify-items-start'>
      <div className='justify-self-center px-3'>
        <h1 className='text-blue-600 text-5xl'>top 5 monedas</h1>
        <ul>
          {coins.map(coin => (
            <li className='my-8 text-3xl' key={coin?.id}>{coin?.name} : {coin?.metrics?.marketcap?.current_marketcap_usd}</li>
          ))}
        </ul>
      </div>
      <div className='justify-self-center py-2 px-3'>

        <button type='submit' className='bg-slate-400 rounded-md border-2 border-black' onClick={() => setSendGraphic(true)}
        >Ver porcentaje de cada moneda en el mercado</button>
        {sendGraphic ? (
          <CircleGraphic />
        ) : ('')}
      </div>
    </div>
  );
};

export default Main;
