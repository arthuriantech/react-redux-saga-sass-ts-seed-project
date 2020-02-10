import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Card} from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import {FilterProps, SelectedFilters, FilteredData, filterData, fetchFilterProps} from '../services/FilterData';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [10, 59, 30, 81, 56],
    },
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,128,2,1)',
      borderWidth: 2,
      data: [10, 90, 20, 81, 56],
    },
  ],
};

export const Home = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2014/02/10'));

  const [filteredData, setFilteredData] = useState<FilteredData>(state);

  const [filterProps, setFilterProps] = useState<FilterProps>({
    from: [],
    to: [],
    carType: [],
    serviceType: [],
  });

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    from: '',
    to: '',
    dateStart: 0,
    dateEnd: 0,
    carType: '',
    serviceType: '',
  });

  useEffect(() => {
    // fetchFilterProps().then(data => setFilterProps(data));
  }, []);

  useEffect(() => {
    // filterData(selectedFilters).then(data => setFilteredData(data));
  }, [selectedFilters]);

  return (
    <Container fluid>
      <Container>
        <Card>
          <Card.Body>
            <Form.Group>
              <Form.Label>Загрузка файла</Form.Label>
              <Form.Control size="sm" type="file" />
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Card>
          <Card.Body>
            <Row className="card-body">
              <Col>
                <Form.Group>
                  <Form.Label>Откуда</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"
                    value={selectedFilters.from}
                    onChange={e =>
                      setSelectedFilters({
                        ...selectedFilters,
                        from: e.currentTarget.value,
                      })
                    }
                  >
                    {filterProps.from.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Куда</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"
                    value={selectedFilters.to}
                    onChange={e =>
                      setSelectedFilters({
                        ...selectedFilters,
                        to: e.currentTarget.value,
                      })
                    }
                  >
                    {filterProps.to.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
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
                  <Form.Control
                    size="sm"
                    as="select"
                    value={selectedFilters.serviceType}
                    onChange={e =>
                      setSelectedFilters({
                        ...selectedFilters,
                        serviceType: e.currentTarget.value,
                      })
                    }
                  >
                    {filterProps.serviceType.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Тип тачки</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"
                    value={selectedFilters.carType}
                    onChange={e =>
                      setSelectedFilters({
                        ...selectedFilters,
                        carType: e.currentTarget.value,
                      })
                    }
                  >
                    {filterProps.carType.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <div className="card">
          <div className="card-body">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
        </div>
      </Container>
    </Container>
  );
};
