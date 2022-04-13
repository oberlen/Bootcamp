import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { once, set, omit } from 'lodash/fp';
import { Platform } from 'react-native';

const $fetcher = axios.create({
  baseURL: 'http://leumi-stub.herokuapp.com',
  responseType: 'json',
  withCredentials: true,
});

type Log = {
  type: 'request' | 'response';
  value: AxiosResponse | AxiosRequestConfig;
};

const logger: Log[] = [];
const nativeLoggerFormatting: number | string = 4;

// update interceptors to log every API call
globalThis.logger = logger;
$fetcher.interceptors.request.use(
  function success(request) {
    if (__DEV__) {
      console.info('request', request);
      logger.push({ type: 'request', value: request });
    }

    return request;
  },
  function exception(error) {
    if (__DEV__) {
      console.info('request', error.toJSON());
      logger.push({ type: 'request', value: error.toJSON() });
    }

    return Promise.reject(error);
  },
);

$fetcher.interceptors.response.use(
  function success(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (__DEV__) {
      console.info('response', { url: response.config.url }, '\n', response);
      logger.push({ type: 'response', value: response });
    }
    return response;
  },
  function exception(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (__DEV__) {
      console.info('response', error.toJSON());
      logger.push({ type: 'response', value: error.toJSON() });
    }

    if (!error.response) {
      const withResponse = set(
        'response',
        {
          status: 500,
        },
        error,
      );

      return Promise.reject(withResponse);
    }

    return Promise.reject(error);
  },
);

// for every configuration - send to native a 'reset session timer' event to prevent logout too soon
$fetcher.interceptors.request.use(function success(request) {
  return request;
});

const _get = $fetcher.get;
const _post = $fetcher.post;

$fetcher.get = function get(url: string, config: AxiosRequestConfig = {}) {
  return new Promise((resolve) => {
    resolve(_get(url, { ...config }));
    return;
  });
};

$fetcher.post = function post(
  url: string,
  data?: unknown,
  config: AxiosRequestConfig = {},
) {
  return new Promise((resolve) => {
    resolve(_post(url, data, { ...config }));
    return;
  });
};

export default function fetcher(): AxiosInstance {
  return $fetcher;
}
