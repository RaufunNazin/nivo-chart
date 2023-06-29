import Navbar from "./components/Navbar";
import LineChart from "./components/line";

const Chart = () => {
  function getRandomValue() {
    return Math.floor(Math.random() * 1000);
  }
  const lines = [
    {
      id: "Personalized",
      color: "#8B5CF6",
      data: [
        { x: "01/01", y: 700 },
        { x: "01/02", y: 200 },
        { x: "01/03", y: 800 },
        { x: "01/04", y: 400 },
        { x: "01/05", y: 800 },
        { x: "01/06", y: 300 },
        { x: "01/07", y: 700 },
        { x: "01/08", y: 200 },
      ],
    },
    {
      id: "Toplist",
      color: "#D1D5DB",
      data: [
        { x: "01/01", y: 800 },
        { x: "01/02", y: 200 },
        { x: "01/03", y: 1400 },
        { x: "01/04", y: 800 },
        { x: "01/05", y: 400 },
        { x: "01/06", y: 1200 },
        { x: "01/07", y: 1400 },
        { x: "01/08", y: 1600 },
      ],
    },
    {
      id: "Random",
      color: "#22C55E",
      data: [
        { x: "01/01", y: 500 },
        { x: "01/02", y: 2000 },
        { x: "01/03", y: 1500 },
        { x: "01/04", y: 3000 },
        { x: "01/05", y: 2500 },
        { x: "01/06", y: 3000 },
        { x: "01/07", y: 3500 },
        { x: "01/08", y: 2500 },
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
