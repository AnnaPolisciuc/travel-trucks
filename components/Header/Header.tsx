'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          <svg width={136} height={15} fill="none">
            <use href={'/icons/sprite.svg#icon-logo'} />
          </svg>

        </Link>

        <nav className={css.nav}>
          <Link
           href="/"
           className={`${css.link} ${
             pathname === '/' ? css.active : ''
           }`}
          >
            Home
          </Link>

          <Link
            href="/catalog"
            className={`${css.link} ${
              pathname.startsWith('/catalog') ? css.active : ''
            }`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
