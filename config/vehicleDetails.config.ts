import { Camper } from './../types/camper';
export const VEHICLE_DETAILS = [
  {
    label: 'Form',
    value: (camper: Camper) => camper.form,
  },
  {
    label: 'Length',
    value: (camper: Camper) => `${camper.length} m`,
  },
  {
    label: 'Width',
    value: (camper: Camper) => `${camper.width} m`,
  },
  {
    label: 'Height',
    value: (camper: Camper) => `${camper.height} m`,
  },
  {
    label: 'Tank',
    value: (camper: Camper) => `${camper.tank} l`,
  },
  {
    label: 'Consumption',
    value: (camper: Camper) => camper.consumption,
  },
];
