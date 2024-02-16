import React from 'react';
import styles from './navbar.module.scss';
import { RouteList } from '@/router';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {Object.keys(RouteList).map((key) => {
          const route = RouteList[key as keyof typeof RouteList];
          if (!route.includes(':id') && route !== "/") {
            return (
              <li key={key} className={styles.navbarItem}>
                <Link to={route}>{key}</Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
