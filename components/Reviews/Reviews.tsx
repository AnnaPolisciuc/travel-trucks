// Reviews.tsx
import { Review } from '@/types/camper';
import css from './Reviews.module.css';

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className={css.reviews}>
      {reviews.map((review, i) => (
        <div key={i} className={css.card}>
          <div className={css.header}>
            <div className={css.avatar}>
              {review.reviewer_name[0]}
            </div>

            <div>
              <p className={css.name}>{review.reviewer_name}</p>
              <p className={css.rating}>⭐ {review.reviewer_rating}</p>
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
