import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../customHooks/useStores'
import NavBar from "./NavBar/NavBar"
import Categories from "./Categories/Categories";
import Chat from "./Chat/Chat";
const DefaultLayout = observer(() => {
  const store = useStores().DefaultLayoutStore

  return (
    <>
    <NavBar/>
    <Categories/>
    <Chat/>
    </>
  )
})

export default DefaultLayout
