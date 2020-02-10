import axios from 'axios';

export interface FilterProps {
  from: string[];
  to: string[];
  carType: string[];
  serviceType: string[];
}

export interface SelectedFilters {
  from: string;
  to: string;
  startDate: Date | null;
  endDate: Date | null;
  carType: string;
  serviceType: string;
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
  return await (await axios.post('https://x33-space.pro/properties', formData)).data;
};

export const fetchFilterProps = async (): Promise<FilterProps> => {
  return {
    from: [],
    to: [],
    carType: [],
    serviceType: [],
  };

  // return await (await axios('https://x33-space.pro/properties', {})).data;
};

export const filterData = async (filters: SelectedFilters): Promise<FilteredData> => {
  return {
    chart1: state,
    chart2: state,
    chart3: state,
    chart4: state,
  };
  // return await (await axios('https://x33-space.pro/properties', {})).data;
};

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
