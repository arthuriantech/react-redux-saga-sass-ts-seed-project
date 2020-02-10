import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ReactDatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

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
  const [filteredData, setFilteredData] = useState<FilteredData>({
    chart1: {},
    chart2: {},
    chart3: {},
    chart4: {},
  });

  const [filterProps, setFilterProps] = useState<FilterProps>({
    from: [],
    to: [],
    carType: [],
    serviceType: [],
    files: [],
  });

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    from: '',
    to: '',
    startDate: new Date(),
    endDate: new Date(),
    carType: '',
    serviceType: '',
    file: '',
  });

  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    fetchFilterProps().then(data => setFilterProps(data));
  }, []);

  useEffect(() => {
    if (file) {
      sendFile(file);
    }
  }, [file]);

  useEffect(() => {
    filterData(selectedFilters).then(data => setFilteredData(data));
  }, [selectedFilters]);

  return (
    <Container fluid>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form.Group>
                  <Form.Label>Загрузка файла</Form.Label>
                  <Form.Control
                    type="file"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    onChange={(e: any) => setFile(e.currentTarget.files[0])}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Файл</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"
                    value={selectedFilters.file}
                    onChange={e =>
                      setSelectedFilters({
                        ...selectedFilters,
                        file: e.currentTarget.value,
                      })
                    }
                  >
                    {filterProps.files.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
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
              <Col sm={4}>
                <Form.Group>
                  <Form.Label>Дата</Form.Label>
                  <Row className="d-flex justify-content-around">
                    <ReactDatePicker
                      locale={ru}
                      selected={selectedFilters.startDate}
                      onChange={startDate => setSelectedFilters({...selectedFilters, startDate})}
                      selectsStart
                      startDate={selectedFilters.startDate}
                      endDate={selectedFilters.endDate}
                    />
                    <ReactDatePicker
                      locale={ru}
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
      <Container fluid>
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
