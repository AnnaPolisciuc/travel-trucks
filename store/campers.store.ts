import { create } from 'zustand';
import { Camper } from '@/types/camper';
import { getCampers } from '@/services/campers.api';
import { useFiltersStore } from './filters.store';

interface CampersState {
  campers: Camper[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;

  fetchCampers: (reset?: boolean) => Promise<void>;
  loadMore: () => void;
}

export const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,

  fetchCampers: async (reset = false) => {
    try {
      set({ loading: true, error: null });
  
      const { location, vehicleType, equipment } =
        useFiltersStore.getState();
  
      const currentPage = reset ? 1 : get().page;
  
      const data = await getCampers({
        page: currentPage,
        limit: 8,
        location,
        form: vehicleType,
        equipment,
      });
  
      set((state) => ({
        campers: reset ? data : [...state.campers, ...data],
        page: currentPage + 1,
        hasMore: data.length === 8,
        loading: false,
      }));
    } catch {
      set({ loading: false, error: 'Failed to load campers' });
    }
  },
  

  loadMore: () => {
    get().fetchCampers();
  },
}));
