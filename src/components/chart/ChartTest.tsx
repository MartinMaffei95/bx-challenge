import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

type Props = { coinPrices: number[]; barColor: string; linecolor: string };
const ChartComponent = ({ coinPrices, barColor, linecolor }: Props) => {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );

  const labels = coinPrices;
  console.log(coinPrices);
  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Dataset 1',
        borderColor: barColor || 'red',
        borderWidth: 2,
        fill: false,
        data: coinPrices,
        pointStyle: 'rect',
        elements: {
          point: {
            borderWidth: 2,
            radius: 0,
            backgroundColor: 'rgba(0,0,0,0)',
          },
        },
      },
      {
        type: 'bar' as const,
        label: 'Dataset 2',
        borderColor: linecolor || 'blue',
        borderWidth: 8,
        data: coinPrices,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        display: false,
      },
      x: {
        display: false,
      },
    },
    showLine: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Chart type="bar" data={data} options={options} />;
};

export default ChartComponent;
