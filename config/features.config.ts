import { Camper } from '@/types/camper';

export const FEATURES = [
  {
    key: 'transmission',
    label: 'Automatic',
    icon: 'icon-diagram',
    show: (camper: Camper) => camper.transmission === 'automatic',
  },
  {
    key: 'AC',
    label: 'AC',
    icon: 'icon-wind',
    show: (camper: Camper) => camper.AC,
  },
  {
    key: 'kitchen',
    label: 'Kitchen',
    icon: 'icon-cup-hot',
    show: (camper: Camper) => camper.kitchen,
  },
  
  {
    key: 'bathroom',
    label: 'Bathroom',
    icon: 'icon-ion_water-outline',
    show: (camper: Camper) => camper.radio,
  },
  {
    key: 'water',
    label: 'Water',
    icon: 'icon-ph_shower',
    show: (camper: Camper) => camper.radio,
  },
  {
    key: 'refrigerator',
    label: 'Refrigerator',
    icon: 'icon-solar_fridge-outline',
    show: (camper: Camper) => camper.radio,
  },
  {
    key: 'microwave',
    label: 'Microwave',
    icon: 'icon-lucide_microwave',
    show: (camper: Camper) => camper.radio,
  },

];
