import LineChart from "./components/line";

const Chart = () => {
  const lines = [
    {
      id: "Personalized",
      color: "#8B5CF6",
      data: [
        {
          x: "06/04",
          y: 4000,
        },
        {
          x: "06/03",
          y: 3000,
        },
        {
          x: "06/02",
          y: 2000,
        },
        {
          x: "06/01",
          y: 2780,
        },
      ],
    },
    {
      id: "Toplist",
      color: "#D1D5DB",
      data: [
        {
          x: "06/04",
          y: 4000,
        },
        {
          x: "06/03",
          y: 3000,
        },
        {
          x: "06/02",
          y: 2000,
        },
        {
          x: "06/01",
          y: 2780,
        },
      ],
    },
    {
      id: "Random",
      color: "#22C55E",
      data: [
        {
          x: "06/04",
          y: 4000,
        },
        {
          x: "06/03",
          y: 3000,
        },
        {
          x: "06/02",
          y: 2000,
        },
        {
          x: "06/01",
          y: 2780,
        },
      ],
    },
  ];
  return (
    <div className="h-96 m-4">
      <LineChart data={lines} />
    </div>
  );
};
export default Chart;
