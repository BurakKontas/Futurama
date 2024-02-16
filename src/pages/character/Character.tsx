import React from 'react'

import { useParams } from 'react-router-dom';
import CharacterCard from '@Components/charactercard/charactercard';

import styles from './Character.module.scss'
import { useFuturama } from '@Hooks/useFuturama';
import { FuturamaCharacter } from '@Services/FuturamaService';

function Character() {
  const { id } = useParams();
  const { getCharacter } = useFuturama();
  const characterQuery = getCharacter(parseInt(id!));
  const character: FuturamaCharacter = characterQuery.data as FuturamaCharacter;

  React.useEffect(() => {
    characterQuery.refetch();
  }, [])

  return (
    <div className={styles.container}>
      <CharacterCard className={styles.character_card} character={character} />
      <div className={styles.sayings}>
        <h2>Sayings</h2>
        {character && character.sayings.map((saying, index) => {
          return (
            <p key={index}>{saying}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Character