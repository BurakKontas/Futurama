import React from 'react'
import { useAppDispatch, useAppSelector } from '@Redux/hooks'
import counter from '@Redux/Counter'

import { CustomButton } from '@Components/custombutton'
// import CustomButton from '@Components/custombutton/custombutton'

import { useFuturama } from '@Hooks/useFuturama/useFuturama'

import styles from './Homepage.module.scss'
import useAsyncState from '@/hooks/useAsyncState'

function Homepage() {
  const count = useAppSelector(counter.selectors.getCounter)
  const dispatch = useAppDispatch()
  const [id, setId] = useAsyncState(0)
  const { getCharacter } = useFuturama()

  const getCharacterQuery = getCharacter()
  const getCharacterById = getCharacter(id)

  const fetchFuturamaInfo = async() => {
    console.log(await getCharacterQuery.refetch())
  }

  const fetchFirstCharacter = async() => {
    await setId(prev => prev + 1)
    console.log(await getCharacterById.refetch())
  }


  const increment = () => {
    dispatch(counter.actions.increment(1))
    dispatch(counter.async_thunks.fetchPosts({ counter: 1 }))
  }

  return (
    <div className={styles.container}>
      <CustomButton onClick={increment}>
        count is: {count}
      </CustomButton>
      <CustomButton onClick={fetchFuturamaInfo}>
        Fetch Futurama Info
      </CustomButton>
      <CustomButton onClick={fetchFirstCharacter}>
        Fetch {(id || 0) + 1} Character
      </CustomButton>
    </div>
  )
}

export default Homepage