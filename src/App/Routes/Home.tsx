import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Card} from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import {
  FilterProps,
  SelectedFilters,
  FilteredData,
  filterData,
  fetchFilterProps,
  sendFile,
} from '../services/FilterData';
import {Line} from 'react-chartjs-2';

export const Home = () => {
  const [filteredData, setFilteredData] = useState<FilteredData>({});

  const [filterProps, setFilterProps] = useState<FilterProps>({
    from: [],
    to: [],
    carType: [],
    serviceType: [],
  });

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    from: '',
    to: '',
    startDate: new Date(),
    endDate: new Date(),
    carType: '',
    serviceType: '',
  });

  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (file) {
      sendFile(file);
    }
  }, [file]);

  useEffect(() => {
    fetchFilterProps().then(data => setFilterProps(data));
  }, []);

  useEffect(() => {
    filterData(selectedFilters).then(data => setFilteredData(data));
  }, [selectedFilters]);

  return (
    <Container fluid>
      <Container>
        <Card>
          <Card.Body>
            <Form.Group>
              <Form.Label>Загрузка файла</Form.Label>
              <Form.Control
                type="file"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={(e: any) => setFile(e.currentTarget.value)}
              />
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
                      selected={selectedFilters.startDate}
                      onChange={startDate => setSelectedFilters({...selectedFilters, startDate})}
                      selectsStart
                      startDate={selectedFilters.startDate}
                      endDate={selectedFilters.endDate}
                    />
                    <ReactDatePicker
                      selected={selectedFilters.endDate}
                      onChange={endDate => setSelectedFilters({...selectedFilters, endDate})}
                      selectsEnd
                      startDate={selectedFilters.startDate}
                      endDate={selectedFilters.endDate}
                      minDate={selectedFilters.startDate}
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
              data={filteredData.chart1}
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
              data={filteredData.chart2}
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
              data={filteredData.chart3}
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
              data={filteredData.chart4}
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
