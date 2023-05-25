import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../customHooks/useStores'
const DefaultLayout = observer(() => {
  const store = useStores().DefaultLayoutStore

  return (
    <>
    {store.sum}
    </>
  )
})

export default DefaultLayout
