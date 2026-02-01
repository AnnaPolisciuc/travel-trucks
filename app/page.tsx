import Image from "next/image";
import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className={css.hero}>
    <Image
      src="/hero.jpg"       
      alt="Camper in nature"
      fill
      priority
      className={css.image}
    />

    <div className={css.overlay} />

    <div className={css.content}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>

      <Link href="/catalog" className={css.button}>
        View Now
      </Link>
    </div>
  </section>
  );
}
