// Path: components/custombutton/custombutton.cmp.tsx

import React from 'react';
import styles from './layout.module.scss';
import { Navbar } from '@Components/navbar';
import { LayoutProps } from './layout.types';

const CustomButton: React.FC<LayoutProps> = ({ children }) => {
 
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.children}>
        {children}
      </div>
    </div>
  );
}

export default CustomButton;
