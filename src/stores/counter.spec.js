// tests/stores/counter.spec.js
import { setActivePinia, createPinia } from "pinia";
import { useCounterStore } from "../../src/stores/counter";

describe("Counter Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should have initial count of 0", () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
  });

  it("should increment the count", () => {
    const counter = useCounterStore();
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it("should return doubleCount correctly", () => {
    const counter = useCounterStore();
    counter.count = 2;
    expect(counter.doubleCount).toBe(4);
  });
});
