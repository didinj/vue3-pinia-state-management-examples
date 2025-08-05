// import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", {
//   state: () => ({
//     count: 0
//   }),

//   getters: {
//     doubleCount: state => state.count * 2
//   },

//   actions: {
//     increment() {
//       this.count++;
//     },
//     decrement() {
//       this.count--;
//     },
//     incrementBy(amount) {
//       this.count += amount;
//     }
//   }
// });
// import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", {
//   state: () => ({ count: 0 }),
//   getters: {
//     doubleCount: state => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count++;
//     }
//   }
// });

// stores/counter.js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    },
    incrementAsync() {
      setTimeout(() => this.increment(), 1000);
    }
  }
});
