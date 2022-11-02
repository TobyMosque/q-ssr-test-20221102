<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { preFetch } from 'quasar/wrappers';
import { storeToRefs } from 'pinia';
import { useCounterStore } from './stores/counter';

export default defineComponent({
  preFetch: preFetch(async ({ store }) => {
    const counterStore = useCounterStore(store);
    const { contextId } = storeToRefs(counterStore);

    console.log('prefetch start:', contextId.value);
    await counterStore.update('quasardi');
    console.log('prefetch end:', contextId.value);
  }),
});
</script>

<script setup lang="ts">
const counterStore = useCounterStore();
const { counter, contextId } = storeToRefs(counterStore);
console.log('setup:', contextId.value, counter.value);
</script>
