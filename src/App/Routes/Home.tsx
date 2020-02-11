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
import SelectControl from '../components/SelectControl';
import LineChart from '../components/LineChart';

export const Home = () => {
  const [filteredData, setFilteredData] = useState<FilteredData>({});

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
                <SelectControl
                  label="Файл"
                  options={filterProps.files}
                  value={selectedFilters.file}
                  onChange={value =>
                    setSelectedFilters({
                      ...selectedFilters,
                      file: value,
                    })
                  }
                />
              </Col>
              <Col>
                <SelectControl
                  label="Откуда"
                  options={filterProps.from}
                  value={selectedFilters.from}
                  onChange={value =>
                    setSelectedFilters({
                      ...selectedFilters,
                      from: value,
                    })
                  }
                />
              </Col>
              <Col>
                <SelectControl
                  label="Куда"
                  options={filterProps.to}
                  value={selectedFilters.to}
                  onChange={value =>
                    setSelectedFilters({
                      ...selectedFilters,
                      to: value,
                    })
                  }
                />
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
                      dateFormat="dd/MM/yyyy"
                    />
                    <ReactDatePicker
                      locale={ru}
                      selected={selectedFilters.endDate}
                      onChange={endDate => setSelectedFilters({...selectedFilters, endDate})}
                      selectsEnd
                      startDate={selectedFilters.startDate}
                      endDate={selectedFilters.endDate}
                      minDate={selectedFilters.startDate}
                      dateFormat="dd/MM/yyyy"
                    />
                  </Row>
                </Form.Group>
              </Col>
              <Col>
                <SelectControl
                  label="Тип услуги"
                  options={filterProps.serviceType}
                  value={selectedFilters.serviceType}
                  onChange={value =>
                    setSelectedFilters({
                      ...selectedFilters,
                      serviceType: value,
                    })
                  }
                />
              </Col>
              <Col>
                <SelectControl
                  label="Тип тачки"
                  options={filterProps.carType}
                  value={selectedFilters.carType}
                  onChange={value =>
                    setSelectedFilters({
                      ...selectedFilters,
                      carType: value,
                    })
                  }
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container fluid>
        <LineChart data={filteredData.chart1} />
        <LineChart data={filteredData.chart2} />
        <LineChart data={filteredData.chart3} />
        <LineChart data={filteredData.chart4} />
      </Container>
    </Container>
  );
};
