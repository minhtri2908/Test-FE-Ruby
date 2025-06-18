import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface BarChartOneProps {
  title?: string;
  categories: string[];
  data: number[];
}

const BarChartOne = ({ title, categories, data }: BarChartOneProps) => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
    },
    xaxis: {
      categories,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    colors: ["#6366F1"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "50%",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => val.toString(),
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#111"],
      },
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex }) => {
        const category = categories[dataPointIndex];
        const value = series[seriesIndex][dataPointIndex];
        return `
          <div class="p-2 text-sm">
            <strong>Mức điểm:</strong> ${category}<br/>
            <strong>Số học sinh:</strong> ${value}
          </div>
        `;
      },
    },
    responsive: [
      {
        breakpoint: 640, // sm breakpoint
        options: {
          chart: { height: 280 },
          plotOptions: {
            bar: { columnWidth: "60%" },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Số học sinh",
      data,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-3 sm:p-4">
      {title && (
        <h2 className="text-base sm:text-lg font-semibold mb-3">{title}</h2>
      )}
      <div className="overflow-x-auto">
        <Chart options={options} series={series} type="bar" height={300} />
      </div>
    </div>
  );
};

export default BarChartOne;
