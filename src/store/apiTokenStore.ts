import { create } from 'zustand';

// Define the state and actions types
interface ApiTokenState {
  apiToken: string;
  addApiToken: (token: string) => void;
  resetApiToken: () => void;
}

// Create the store
const useApiTokenStore = create<ApiTokenState>(set => ({
  apiToken: '',
  addApiToken: (token: string) => set({ apiToken: token }),
  resetApiToken: () => set({ apiToken: '' }),
}));

export default useApiTokenStore;
