import axios from 'axios';
import { url } from 'constants/serverUrl';

export const getDataSet = () => axios.get(`${url}/data_set`);
