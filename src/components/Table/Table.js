import React from 'react';
import { useCoinsContext } from '../../provider/CoinsProvider';

const Table = () => {
  const coins = useCoinsContext();
  return (
    <div className=''>
        <table data-testid="table-element" className='table-auto w-full mt-6'>
            <thead>
                <tr className='text-left bg-slate-200'>
                    <th>#</th>
                    <th>ASSET</th>
                    <th>PRICE</th>
                    <th>24H PRICE</th>
                    <th>MCAP</th>
                </tr>
            </thead>
            <tbody className='bg-slate-50'>
                    {coins.map((coin, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{coin?.name}</td>
                            <td>{coin?.metrics?.market_data?.price_usd}</td>
                            <td>%{coin?.metrics?.market_data?.percent_change_usd_last_24_hours}</td>
<td>{coin?.metrics?.marketcap?.current_marketcap_usd}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  );
};

export default Table;
