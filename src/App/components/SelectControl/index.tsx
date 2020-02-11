import React from 'react';
import Form from 'react-bootstrap/Form';

interface Props {
  value: string;
  onChange: FunctionStringCallback;
  options: string[];
  label: string;
}

const SelectControl = ({value, onChange, options, label}: Props) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control size="sm" as="select" value={value} onChange={e => onChange(e.currentTarget.value)}>
        <option value="">Не выбрано</option>
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default SelectControl;
