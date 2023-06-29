import { ResponsiveBar } from "@nivo/bar";

const MyResponsiveBar = ({
  data,
  chartName,
  bottomLegend,
  leftLegend,
  valueScale,
  padding,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  indexBy,
}) => (
  <ResponsiveBar
    data={data.data}
    indexBy={indexBy}
    margin={{
      top: marginTop,
      right: marginRight,
      bottom: marginBottom,
      left: marginLeft,
    }}
    padding={padding}
    valueScale={{ type: `${valueScale}` }}
    indexScale={{ type: "band", round: true }}
    colors={(bar) => bar.data.color}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "indexes",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: `${bottomLegend}@10`,
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: `${leftLegend}`,
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    role="chart"
    ariaLabel={`${chartName}`}
  />
);

export default MyResponsiveBar;
