import { create } from 'zustand';

interface FiltersState {
  location: string;
  vehicleType: string;
  equipment: string[];

  setLocation: (value: string) => void;
  setVehicleType: (value: string) => void;
  toggleEquipment: (value: string) => void;
  resetFilters: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  location: '',
  vehicleType: '',
  equipment: [],

  setLocation: (value) => set({ location: value }),
  setVehicleType: (value) => set({ vehicleType: value }),

  toggleEquipment: (value) =>
    set((state) => ({
      equipment: state.equipment.includes(value)
        ? state.equipment.filter((item) => item !== value)
        : [...state.equipment, value],
    })),

  resetFilters: () =>
    set({
      location: '',
      vehicleType: '',
      equipment: [],
    }),
}));
