import React from 'react'

import styles from './Characters.module.scss'
import { useFuturama } from '@Hooks/useFuturama';
import { FuturamaCharacter } from '@Services/FuturamaService';
import CharacterCard from '@Components/charactercard/charactercard';

function Characters() {
  const { getCharacter } = useFuturama();
  const charactersQuery = getCharacter();
  const characters = charactersQuery.data;

  React.useEffect(() => {
    charactersQuery.refetch();
  }, [])

  
  return (
    <div className={styles.container}>
      {characters && (characters as FuturamaCharacter[]).map((character: FuturamaCharacter) => {
        return (
          <CharacterCard key={character.id} character={character} />
        )
      })}
    </div>
  )
}

export default Characters;