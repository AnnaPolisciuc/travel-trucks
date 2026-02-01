'use client';

import { useEffect } from 'react';
import { useCampersStore } from '@/store/campers.store';
import { useFiltersStore } from '@/store/filters.store';
import Filters from '@/components/Filters/Filters';
import CamperCard from '@/components/CamperCard/CamperCard';
import css from './page.module.css';

export default function CatalogPage() {
  const { campers, loading, hasMore, fetchCampers, loadMore } =
    useCampersStore();

  const { location, vehicleType, equipment } = useFiltersStore();

  useEffect(() => {
    fetchCampers(true);
  }, [fetchCampers, location, vehicleType, equipment]);

  return (
    <main className={css.catalog}>
      <aside className={css.filters}>
        <Filters />
      </aside>

      <section className={css.list}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}

        {loading && <p>Loading...</p>}

        {!loading && hasMore && (
          <button
            onClick={loadMore}
            className={css.loadMore}
          >
            Load more
          </button>
        )}
      </section>
    </main>
  );
}
