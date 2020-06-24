import { numberOfDataSets } from 'constants/data';

export default index => (index + 1) % numberOfDataSets;
