import React from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  FlexibleWidthXYPlot,
  LineMarkSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  Crosshair,
} from "react-vis";

export default class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { crosshairValues: [] };
  }

  render() {
    const data = this.props.records.map((record) => ({
      x: new Date(record.date),
      y: record[this.props.metric],
    }));
    return (
      <FlexibleWidthXYPlot
        xType="time"
        onMouseLeave={() => this.setState({ crosshairValues: [] })}
        height={300}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Day" />
        <YAxis title={this.props.metric} />
        <LineMarkSeries
          onNearestXY={(value, { index }) =>
            this.setState({ crosshairValues: [data[index]] })
          }
          data={data}
        />
        <Crosshair
          values={this.state.crosshairValues}
          titleFormat={(d) => ({
            title: "Date",
            value: new Date(d[0].x).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          })}
          itemsFormat={(d) => [
            { title: `${this.props.metric}`, value: d[0].y },
          ]}
        />
      </FlexibleWidthXYPlot>
    );
  }
}
