import koaMorgan from 'koa-morgan';
import customDevFormat from './custom';

koaMorgan.format('custom-dev', customDevFormat);

const morgan = () => koaMorgan('custom-dev');

export default morgan;
