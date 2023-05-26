import React, { Suspense } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../customHooks/useStores'
import NavBar from "./NavBar/NavBar"
import Categories from "./Categories/Categories";
import Chat from "./Chat/Chat";
import routes from "../../routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Profile/Profile';
import Login from './Login/Login';
const DefaultLayout = observer(() => {
const store = useStores().DefaultLayoutStore

  return (
    <>
     <NavBar/>
     <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Categories/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/login" element={<Login/>}/>
                </Routes>
      </BrowserRouter>
    </>
  )
})

export default DefaultLayout
