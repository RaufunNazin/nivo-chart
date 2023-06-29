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
    <div className="grid grid-cols-3 h-screen m-4">
      {data.map((datas) => {
        return (
          <div>
            <BarChart data={datas} />
          </div>
        );
      })}
    </div>
  );
};
export default Chart;
