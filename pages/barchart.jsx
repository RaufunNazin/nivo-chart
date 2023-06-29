import Navbar from "./components/Navbar";
import BarChart from "./components/bar";

const Chart = () => {
  const data = [
    {
      chartName: "Recall",
      data: [
        {
          name: "Random",
          value: 0.2,
          color: "#D1D5DB",
        },
        {
          name: "Shaped",
          value: 0.5,
          color: "#A855F7",
        },
        {
          name: "Toplist",
          value: 0.8,
          color: "#0EA5E9",
        },
      ],
    },
    {
      chartName: "Precision",
      data: [
        {
          name: "Random",
          value: 0.5,
          color: "#D1D5DB",
        },
        {
          name: "Shaped",
          value: 0.2,
          color: "#A855F7",
        },
        {
          name: "Toplist",
          value: 0.8,
          color: "#0EA5E9",
        },
      ],
    },
    {
      chartName: "NDCG",
      data: [
        {
          name: "Random",
          value: 0.8,
          color: "#D1D5DB",
        },
        {
          name: "Shaped",
          value: 0.2,
          color: "#A855F7",
        },
        {
          name: "Toplist",
          value: 0.5,
          color: "#0EA5E9",
        },
      ],
    },
  ];
  return (
    <div>
      <Navbar active="bar" />
      <div className="grid grid-cols-3 my-auto h-96 m-4">
        {data.map((bar, i) => {
          return (
            <div key={i}>
              <BarChart
                data={bar} // object
                indexBy="name" // string (object property)
                chartName={bar.chartName} // string
                leftLegend="value" // string
                bottomLegend={bar.chartName} // string
                valueScale="linear" // linear or symlog
                padding={0.3} // number
                marginTop={50} // number
                marginBottom={50} // number
                marginLeft={60} // number
                marginRight={130} // number
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Chart;
