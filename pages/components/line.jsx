import { ResponsiveLine } from "@nivo/line";

const MyResponsiveLine = ({
  data,
  bottomLegend,
  leftLegend,
  xScale,
  yScale,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  legendPosition,
  stacked,
  pointSize,
  legendDirection,
  legendSymbol,
}) => (
  <ResponsiveLine
    data={data}
    margin={{
      top: marginTop,
      right: marginRight,
      bottom: marginBottom,
      left: marginLeft,
    }}
    xScale={{ type: xScale }}
    yScale={{
      type: yScale,
      min: "auto",
      max: "auto",
      stacked: stacked,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: `${bottomLegend}`,
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: `${leftLegend}`,
      legendOffset: -40,
      legendPosition: "middle",
    }}
    colors={(line) => line.color}
    pointSize={pointSize}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: `${legendPosition}`,
        direction: `${legendDirection}`,
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemDirection: "left-to-right",
        itemWidth: 100,
        itemHeight: 20,
        itemOpacity: 0.85,
        symbolSize: 20,
        symbolShape: `${legendSymbol}`,
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveLine;
