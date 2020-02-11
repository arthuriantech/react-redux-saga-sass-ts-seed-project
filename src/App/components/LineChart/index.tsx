import React from 'react';
import {ChartOptions} from '../../services/FilterData';
import {Card} from 'react-bootstrap';
import {Line} from 'react-chartjs-2';

interface Props {
  data?: ChartOptions;
}

const LineChart = ({data}: Props) => {
  return (
    <>
      {data && (
        <Card>
          <Card.Body>
            <Line
              redraw
              data={data}
              options={{
                title: {
                  display: true,
                  text: data.title,
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default LineChart;
