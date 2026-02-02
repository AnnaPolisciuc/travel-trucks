'use client';

import {  useState } from 'react';
import { useFiltersStore } from '@/store/filters.store';
import css from './Filters.module.css';
import { EQUIPMENT_FILTERS } from '@/config/filters.config';
import { VEHICLE_TYPES } from '@/config/filters.config';
import { useCampersStore } from '@/store/campers.store';

export default function Filters() {
  const {
    location,
    vehicleType,
    equipment,
    setLocation,
    setVehicleType,
    toggleEquipment,
  } = useFiltersStore();

  const [localLocation, setLocalLocation] = useState(location);
  const { resetAndFetch } = useCampersStore();

  return (
    <aside className={css.filters}>
    {/* LOCATION */}
    <div className={css.section}>
      <label className={css.label}>
        Location
        <input
          className={css.input}
          value={localLocation}
          onChange={(e) => setLocalLocation(e.target.value)}
          placeholder="Kyiv, Ukraine"
        />
      </label>
    </div>
  
    {/* FILTERS TITLE */}
    <h2 className={css.filtersTitle}>Filters</h2>
  
    {/* VEHICLE EQUIPMENT */}
    <div className={css.section}>
      <h3 className={css.sectionTitle}>Vehicle equipment</h3>
  
      <div className={css.filterGrid}>
        {EQUIPMENT_FILTERS.map(({ key, label, icon }) => (
          <button
            key={key}
            type="button"
            className={`${css.filterButton} ${
              equipment.includes(key) ? css.active : ''
            }`}
            onClick={() => toggleEquipment(key)}
          >
            <svg width="32" height="32">
              <use href={`/icons/sprite.svg#${icon}`} />
            </svg>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  
    {/* VEHICLE TYPE */}
    <div className={css.section}>
      <h3 className={css.sectionTitle}>Vehicle type</h3>
  
      <div className={css.filterGrid}>
        {VEHICLE_TYPES.map(({ key, label, icon }) => (
          <button
            key={key}
            type="button"
            className={`${css.filterButton} ${
              vehicleType === key ? css.active : ''
            }`}
            onClick={() => setVehicleType(key)}
          >
            <svg width="32" height="32">
              <use href={`/icons/sprite.svg#${icon}`} />
            </svg>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  
    {/* SEARCH */}
    <button
  className={css.searchButton}
  onClick={() => {
    setLocation(localLocation);
    resetAndFetch();
  }}
>
  Search
</button>
  </aside>
  );
}
