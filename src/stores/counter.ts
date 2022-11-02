import { defineStore } from 'pinia';
import { uid } from 'quasar';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    contextId: uid(),
    counter: 0,
  }),
  actions: {
    async update(container: string): Promise<void> {
      const { data } = await this.api.get<{ value: number }>(
        `hit/${container}/key`
      );
      this.counter = data.value;
    },
  },
});
