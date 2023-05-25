import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../customHooks/useStores'
const DefaultLayout = observer(() => {
  const store = useStores().DefaultLayoutStore

  return (
    <>
<<<<<<< HEAD
    <Test/>
=======
    {store.sum}
>>>>>>> 3e36b4596b7cfccd9117a7959d16d8b29479b46d
    </>
  )
})

export default DefaultLayout
