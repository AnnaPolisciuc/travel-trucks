'use client';
import { useCampersStore } from '@/store/campers.store';
// import { useFiltersStore } from '@/store/filters.store';
import Filters from '@/components/Filters/Filters';
import CamperCard from '@/components/CamperCard/CamperCard';
import css from './page.module.css';
import { useEffect } from 'react';
import Loader from '@/components/Loader/Loader';

export default function CatalogPage() {
  const { campers, loading, hasMore, loadMore, resetAndFetch } =
    useCampersStore();
    useEffect(() => {
      resetAndFetch();
    }, []);

  // const { location, vehicleType, equipment } = useFiltersStore();
  

  return (
    <main className={css.catalog}>
      <aside className={css.filters}>
        <Filters />
      </aside>

      <section className={css.list}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}

{!loading && campers.length === 0 && (
    <p className={css.empty}>
      No campers found for selected filters
    </p>
  )}
       {loading && <Loader />}

        {!loading && hasMore && campers.length > 0 && (
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
