import axios from 'axios';

export interface FilterProps {
  from: string[];
  to: string[];
  carType: string[];
  serviceType: string[];
  files: string[];
}

export interface SelectedFilters {
  from: string;
  to: string;
  startDate: Date | null;
  endDate: Date | null;
  carType: string;
  serviceType: string;
  file: string;
}

export interface FilteredData {
  chart1?: {};
  chart2?: {};
  chart3?: {};
  chart4?: {};
}

export const sendFile = async (file: File): Promise<FormData> => {
  const formData = new FormData();
  formData.append('file', file);
  return (await axios.post('https://x33-space.pro/xlcharts/api/upload', formData)).data;
};

export const fetchFilterProps = async (): Promise<FilterProps> => {
  return (await axios('https://x33-space.pro/xlcharts/api/properties', {})).data;
};

export const filterData = async (filters: SelectedFilters): Promise<FilteredData> => {
  return (await axios.post('https://x33-space.pro/xlcharts/api/filter', filters)).data;
};
