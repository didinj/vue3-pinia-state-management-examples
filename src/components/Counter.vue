<!-- src/components/Counter.vue -->
<template>
  <div>
    <h2>Counter: {{ counter.count }}</h2>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
    <button @click="counter.incrementBy(5)">Increment by 5</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>
