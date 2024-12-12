import Plot from "react-plotly.js";
type DashboardChartProps = {
  dataX: string[];
  dataY: number[];
  value: number;
  nameChart: string;
};
const DashboardChart = ({
  dataX,
  dataY,
  value,
  nameChart,
}: DashboardChartProps) => {
  return (
    <div className="w-full ">
      <div className="flex flex-col w-full ">
        <div className=" w-full">
          <Plot
            data={[
              {
                x: dataX,
                y: dataY,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "#05AD86" },
              },
            ]}
            layout={{
              title: `${nameChart} History`,
              yaxis: { range: [0, Math.max(...dataY, 10)] },
            }}
            style={{
              width: "100%",
              height: "240px",
            }}
          />
        </div>
        <hr />
        <div className="w-full">
          <Plot
            data={[
              {
                type: "indicator",
                mode: "gauge+number",
                value: value,
                gauge: {
                  axis: { range: [0, 100] },
                  steps: [
                    { range: [0, 20], color: "lightgray" },
                    { range: [20, 40], color: "lightblue" },
                    { range: [40, 100], color: "blue" },
                  ],
                  threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 30,
                  },
                },
              },
            ]}
            layout={{ title: `${nameChart} Gauge` }}
            style={{
              width: "100%",
              height: "240px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
