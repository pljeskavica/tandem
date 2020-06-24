import axios from 'axios';
import { url } from 'constants/serverUrl';

export const getDataSet = dataIndex =>
  axios.get(`${url}/data_set?index=${dataIndex}`);
