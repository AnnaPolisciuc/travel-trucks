// BookingForm.tsx
import css from './BookingForm.module.css';

export default function BookingForm() {
  return (
    <form className={css.form}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <input className={css.input} placeholder="Name*" />
      <input className={css.input} placeholder="Email*" />
      <input className={css.input} placeholder="Booking date*" />
      <textarea className={css.textarea} placeholder="Comment" />

      <button className={css.button}>Send</button>
    </form>
  );
}
