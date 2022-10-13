import React from 'react';
import { Legend, RadialBar, RadialBarChart } from 'recharts';

const LineGraphic = () => {
  const data = [
    {
      name: 'total de transacciones',
      uv: 1300,
      pv: 1300,
      fill: 'blue',
    },
    {
      name: 'abiertas',
      uv: 1000,
      pv: 2400,
      fill: '#40a5ed',
    },
    {
      name: 'cerradas',
      uv: 300,
      pv: 4567,
      fill: '#99a7ed',
    },
  ];

  const style = {
    top: 0,
    left: 350,
    lineHeight: '40px',
  };
  return (
    <div>
      <h1>Detalles de transacciones</h1>
      <RadialBarChart
        width={600}
        height={300}
        cx={150}
        cy={130}
        innerRadius={20}
        outerRadius={140}
        barSize={20}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          iconType="circle"
          width={190}
          height={140}
          layout="vertical"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
};

export default LineGraphic;
