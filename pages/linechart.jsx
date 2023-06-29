import Navbar from "./components/Navbar";
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
    <div>
      <Navbar active="line" />
      <div className="h-96 m-4">
        <LineChart
          data={lines}
          xScale="point" // point or linear
          yScale="linear" // point or linear
          legendPosition="bottom-right" // string
          legendSymbol="square" // string
          legendDirection="column" // column or row
          leftLegend="value" // string
          bottomLegend="Date" // string
          marginTop={50} // number
          marginBottom={50} // number
          marginLeft={60} // number
          marginRight={130} // number
          stacked={true} // boolean
          pointSize={10} // number
        />
      </div>
    </div>
  );
};
export default Chart;
