import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { InjectionKey } from 'vue';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly api: AxiosInstance;
  }
}

export const apiKey: InjectionKey<AxiosInstance> = Symbol('api-key');
export default boot(({ app, store }) => {
  const api = axios.create({ baseURL: 'https://api.countapi.xyz/' });
  app.provide(apiKey, api);
  store.use(() => ({ api }));
});
