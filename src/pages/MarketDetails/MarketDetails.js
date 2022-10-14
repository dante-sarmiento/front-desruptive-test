import React from 'react';
import Table from '../../components/Table/Table';

const MarketDetails = () => {
  return (
    <div className='container flex flex-col justify-center justify-items-center'>
      <h1 className='text-blue-600 text-5xl text-center'>Detalles de cada moneda en el mercado</h1>
        <Table />
    </div>
  );
};

export default MarketDetails;
