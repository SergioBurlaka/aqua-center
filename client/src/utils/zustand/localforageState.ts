import localforage from 'localforage';
import type { StateStorage } from 'zustand/middleware';

export const localforageState: StateStorage = {
  async getItem(name) {
    return localforage.getItem(name);
  },
  async setItem(name, value) {
    await localforage.setItem(name, value);
  },
  async removeItem(name) {
    await localforage.removeItem(name);
  },
};
