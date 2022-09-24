import corsConfig from './cors';

const isProduction = process.env.NODE_ENV === 'production';

const PREFIX = isProduction ? '/api' : '/';

export { corsConfig, PREFIX };
