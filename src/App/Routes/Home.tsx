import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import {fetchProp1, fetchProp2, fetchProp4, fetchProp5} from '../services/Properties';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [10, 59, 30, 81, 56]
    },
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,128,2,1)',
      borderWidth: 2,
      data: [10, 90, 20, 81, 56]
    },
  ]
};

export const Home = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2014/02/10'));

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  const [selectedProp1, setSelectedProp1] = useState('');
  const [selectedProp2, setSelectedProp2] = useState('');
  const [selectedProp4, setSelectedProp4] = useState('');
  const [selectedProp5, setSelectedProp5] = useState('');

  const fetchData = () => {
    fetchProp1().then(data => setData1(data));
    fetchProp2().then(data => setData2(data));
    fetchProp4().then(data => setData4(data));
    fetchProp5().then(data => setData5(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedProp1, selectedProp2, startDate, endDate, selectedProp4, selectedProp5]);

  return (
    <Container fluid>
      <Container className="card">
        <Row className="card-body">
          <Col>
            <Form.Group>
              <Form.Label>Загрузка файла</Form.Label>
              <Form.Control size="sm" type="file" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container className="card">
        <Row className="card-body">
          <Col>
            <Form.Group>
              <Form.Label>Откуда</Form.Label>
              <Form.Control size="sm" as="select" value={selectedProp1} onChange={(e) => setSelectedProp1(e.currentTarget.value)}>
                {data1.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Куда</Form.Label>
              <Form.Control size="sm" as="select" value={selectedProp2} onChange={(e) => setSelectedProp2(e.currentTarget.value)}>
                {data2.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={5} className="d-flex justify-content-center">
            <Form.Group>
              <Form.Label>Дата</Form.Label>
              <Row>
                <ReactDatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
                <ReactDatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </Row>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Тип услуги</Form.Label>
              <Form.Control size="sm" as="select" value={selectedProp4} onChange={(e) => setSelectedProp4(e.currentTarget.value)}>
                {data4.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Тип тачки</Form.Label>
              <Form.Control size="sm" as="select" value={selectedProp5} onChange={(e) => setSelectedProp5(e.currentTarget.value)}>
                {data5.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container className="card">
        <Row className="card-body">
          <Col>
            <Line
              data={state}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                },
                legend:{
                  display: true,
                  position: 'right'
                }
              }}
            />
          </Col>
          <Col>
            <Line
              data={state}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </Col>
        </Row>
        <Row className="card-body">
          <Col>
            <Line
              data={state}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </Col>
          <Col>
            $$$Сума бабла
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
