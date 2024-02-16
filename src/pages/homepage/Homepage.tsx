import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Homepage.module.scss'

function Homepage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/characters');
  }, [])

  return (
    <div className={styles.container}>
    </div>
  )
}

export default Homepage