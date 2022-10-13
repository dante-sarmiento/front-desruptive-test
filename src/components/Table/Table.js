import React from 'react';
import { useCoinsContext } from '../../provider/CoinsProvider';

const Table = () => {
  const coins = useCoinsContext();
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ASSET</th>
                    <th>PRICE</th>
                    <th>24H PRICE</th>
                    <th>MCAP</th>
                </tr>
            </thead>
            <tbody>
                    {coins.map((coin, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{coin?.name}</td>
                            <td>{coin?.metrics?.market_data?.price_usd}</td>
                            <td>{coin?.metrics?.market_data?.percent_change_usd_last_24_hours}</td>
<td>{coin?.metrics?.marketcap?.current_marketcap_usd}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  );
};

export default Table;
