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
  dateStart: number;
  dateEnd: number;
  carType: string;
  serviceType: string;
}

export interface FilteredData {}

export const sendFile = async (): Promise<FormData> => {
  return await (await axios('https://x33-space.pro/properties', {})).data;
};

export const fetchFilterProps = async (): Promise<FilterProps> => {
  return await (await axios('https://x33-space.pro/properties', {})).data;
};

export const filterData = async (filters: SelectedFilters): Promise<FilteredData> => {
  return await (await axios('https://x33-space.pro/properties', {})).data;
};
