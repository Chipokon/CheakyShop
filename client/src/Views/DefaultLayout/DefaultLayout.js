import React, { Suspense, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../customHooks/useStores";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Login from "./NavBar/Login/Login";
import Registration from "./NavBar/Registration/Rigestration";
import Cards from "./Card/Cards";
const DefaultLayout = observer(() => {
  const store = useStores().DefaultLayoutStore;
  
  useEffect(()=>{
    // async function fetchData() {
    // }
    // fetchData();
      store.getCategories();
    
  },[])

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}/>
          <Route path="cheakyShop/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="cheakyShop/signIn" element={<Login />}  />
          <Route path="cheakyShop/signUp" element={<Registration />} /> 
        </Routes>
      </BrowserRouter>
      { store.categories.map((el, index) =>  <Cards el = {el} key={index}/>
      )}
    </>
  );
});

export default DefaultLayout;
