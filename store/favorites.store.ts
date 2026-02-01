import { create } from 'zustand';
import { Camper } from '@/types/camper';

interface FavoritesState {
  favorites: Camper[];
  toggleFavorite: (camper: Camper) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('favorites') || '[]')
      : [],

  toggleFavorite: (camper) => {
    const { favorites } = get();
    const exists = favorites.find((item) => item.id === camper.id);

    const updated = exists
      ? favorites.filter((item) => item.id !== camper.id)
      : [...favorites, camper];

    localStorage.setItem('favorites', JSON.stringify(updated));
    set({ favorites: updated });
  },

  isFavorite: (id) => {
    return get().favorites.some((item) => item.id === id);
  },
}));
