'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getCamperById } from '@/services/campers.api';
import { Camper } from '@/types/camper';

import css from './page.module.css';
import BookingForm from '@/components/BookingForm/BookingForm';
import Features from '@/components/Features/Features';
import Reviews from '@/components/Reviews/Reviews';
import Loader from '@/components/Loader/Loader';

export default function CamperDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [camper, setCamper] = useState<Camper | null>(null);
  const [activeTab, setActiveTab] = useState<'features' | 'reviews'>('features');

  useEffect(() => {
    getCamperById(id).then(setCamper);
  }, [id]);

  if (!camper) return <Loader/>

  return (
    <main className={css.details}>
      {/* HEADER */}
      <h1>{camper.name}</h1>

      <div className={css.meta}>
        ⭐ {camper.rating} ({camper.reviews.length} Reviews)
        <span>📍 {camper.location}</span>
      </div>

      <p className={css.price}>€{camper.price}.00</p>

      {/* GALLERY */}
      <div className={css.gallery}>
  {camper.gallery.map((img, i) => (
    <img
      key={i}
      src={img.original} 
      alt={camper.name}
    />
  ))}
</div>

      <p className={css.description}>{camper.description}</p>

      {/* TABS */}
      <div className={css.tabs}>
        <button
          className={activeTab === 'features' ? css.active : ''}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>

        <button
          className={activeTab === 'reviews' ? css.active : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      <div className={css.content}>
        {/* LEFT */}
        <div>
          {activeTab === 'features' ? (
            <Features camper={camper} />
          ) : (
            <Reviews reviews={camper.reviews} />
          )}
        </div>

        {/* RIGHT */}
        <BookingForm />
      </div>
    </main>
  );
}
