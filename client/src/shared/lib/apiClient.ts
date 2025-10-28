import { credentialsStore } from '@store/credentials.store';
import { NotificationInstance } from 'antd/lib/notification/interface';
import axios from 'axios';
import queryString from 'query-string';

const VITE_API_URL = (import.meta as any).env.VITE_API_URL;

export const headersMultiPartFormData = {
  'Content-Type': 'application/merge-patch+json, multipart/form-data',
};

const apiClient = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    patch: {
      'Content-Type': 'application/merge-patch+json',
    },
  },
  paramsSerializer: (params) =>
    queryString.stringify(params, {
      skipEmptyString: true,
      skipNull: true,
    }),
});

type Props = {
  notification: NotificationInstance;
  cb: () => void;
};

export const setupInterceptors = ({ notification, cb }: Props): void => {
  apiClient.interceptors.request.use(async (config) => {
    const newConfig = { ...config };

    const { getState } = credentialsStore;
    const { token } = getState();

    if (typeof token === 'string') {
      newConfig.headers.Token = `${token}`;
    }

    return newConfig;
  });

  apiClient.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      if (error.response?.data?.messages[0] === 'Authorization error') {
        credentialsStore.persist.clearStorage();
        cb();
        return;
      }

      notification.error({
        message: error.response.data.message ?? error.message ?? 'Unknown error occurred',
        description: error.response?.data?.messages[0],
      });
    },
  );
};

export { apiClient };
