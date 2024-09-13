
import { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [selected, setSelected] = useState<'home' | 'browse' | 'add'>('home');

  return (
    <nav className={styles.navBar}>
      <Link href="/" passHref>
        <div
          className={`${styles.navItem} ${selected === 'home' ? styles.active : ''}`}
          onClick={() => setSelected('home')}
        >
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
          {selected === 'home' && <span>Home</span>}
        </div>
      </Link>

      <Link href="/browse" passHref>
        <div
          className={`${styles.navItem} ${selected === 'browse' ? styles.active : ''}`}
          onClick={() => setSelected('browse')}
        >
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          {selected === 'browse' && <span>Browse</span>}
        </div>
      </Link>

      <Link href="/addEditProf/new" passHref>
        <div
          className={`${styles.navItem} ${selected === 'add' ? styles.active : ''}`}
          onClick={() => setSelected('add')}
        >
          <FontAwesomeIcon icon={faPlus} className={styles.icon} />
          {selected === 'add' && <span>Add</span>}
        </div>
      </Link>
    </nav>
  );
}
