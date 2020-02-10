import axios from 'axios';

export const fetchProp1 = async () => {
  return await (await axios('https://x33-space.pro/properties', {})).data.data;
};
export const fetchProp2 = async () => {
  return await (await axios('https://x33-space.pro/properties')).data.data;
};
export const fetchProp4 = async () => {
  return await (await axios('https://x33-space.pro/properties')).data.data;
};
export const fetchProp5 = async () => {
  return await (await axios('https://x33-space.pro/properties')).data.data;
};
