import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';

const CircleGraphic = () => {
  const [coins, setCoins] = useState([]);
  const getCoins = async () => {
    try {
      const { data } = await axios('https://data.messari.io/api/v2/assets?limit=5');
      console.log(data);
      setCoins(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoins();
  }, []);

  const data = coins.map(coin => (
    { name: coin?.name, value: coin?.metrics?.marketcap?.current_marketcap_usd }));
  console.log(data);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="center">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
    );
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ECA184'];
  return (
    <ResponsiveContainer width="100%" height={250}>
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
  );
};

export default CircleGraphic;
