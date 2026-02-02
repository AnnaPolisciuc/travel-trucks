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
  resetAndFetch: () => Promise<void>;
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

      const page = reset ? 1 : get().page;

      const data = await getCampers({
        page,
        limit: 8,
        location: location || undefined,
        form: vehicleType || undefined,
        equipment,
      });

      set({
        campers: reset ? data : [...get().campers, ...data],
        page: page + 1,
        hasMore: data.length === 8,
        loading: false,
      });
    } catch {
      set({ loading: false, error: 'Failed to load campers' });
    }
  },

  loadMore: () => {
    get().fetchCampers();
  },

  resetAndFetch: async () => {
    set({
      campers: [],
      page: 1,
    });

    await get().fetchCampers(true);
  },
}));
