import { Camper } from '@/types/camper';
import { useRouter } from 'next/navigation';
import { useFavoritesStore } from '@/store/favorites.store';
import css from './CamperCard.module.css';
import { FEATURES } from '@/config/features.config';

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
    const router = useRouter();

  const handleShowMore = () => {
    router.push(`/catalog/${camper.id}`);
  };

  const { toggleFavorite, isFavorite } = useFavoritesStore();

  return (
    <article className={css.card}>
<img
  src={camper.gallery[0].thumb}
  alt={camper.name}
  className={css.image}
/>

    <div className={css.content}>
      {/* HEADER */}
      <div className={css.header}>
        <h3 className={css.title}>{camper.name}</h3>

        <div className={css.price}>
          €{camper.price.toFixed(2)}
          <svg
  width="26"
  height="24"
  onClick={(e) => {
    e.stopPropagation();
    toggleFavorite(camper);
  }}
  className={isFavorite(camper.id) ? css.heartActive : css.heart}
  style={{ cursor: 'pointer' }}
>
  <use href="/icons/sprite.svg#icon-vector--1-" />
</svg>
        </div>
      </div>


      <div className={css.meta}>
        ⭐ {camper.rating} ({camper.reviews.length} Reviews)
        <span>📍 {camper.location}</span>
      </div>

      <p className={css.description}>{camper.description}</p>


      <ul className={css.list}>
        {FEATURES.filter((item) => item.show(camper)).map(
          ({ key, label, icon }) => (
            <li key={key} className={css.item}>
              <svg className={css.icon} width="20" height="20">
                <use href={`/icons/sprite.svg#${icon}`} />
              </svg>
              <span>{label}</span>
            </li>
          )
        )}
      </ul>
      {/* FEATURES */}
      {/* <ul className={css.features}>
        <li>Automatic</li>
        <li>Petrol</li>
        <li>Kitchen</li>
        <li>AC</li>
      </ul> */}

     <button
  className={css.button}
  onClick={handleShowMore}
>
  Show more
</button>
    </div>
  </article>
);
}
