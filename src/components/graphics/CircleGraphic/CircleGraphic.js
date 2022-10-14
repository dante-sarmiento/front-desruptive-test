import {
  PieChart, Pie, Cell, ResponsiveContainer, LabelList,
} from 'recharts';
import { useCoinsContext } from '../../../provider/CoinsProvider';

const CircleGraphic = () => {
  const coins = useCoinsContext();

  const data = coins.map(coin => (
    { name: coin?.name, value: coin?.metrics?.marketcap?.current_marketcap_usd }));

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
    );
  };
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ECA184'];
  return (
    <div className=''>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="60%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            Label
          >
            <LabelList dataKey="name" position="outside" stroke={COLORS}/>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default CircleGraphic;
