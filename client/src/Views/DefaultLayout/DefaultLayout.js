import React, { Suspense, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../customHooks/useStores";
import NavBar from "./NavBar/NavBar";
import Categories from "./Categories/Categories";
import Chat from "./Chat/Chat";
import routes from "../../routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Login from "./NavBar/Login/Login";
import Registration from "./NavBar/Registration/Rigestration";
import { Button } from "antd";
import axios from "axios";
const DefaultLayout = observer(() => {
  const store = useStores().DefaultLayoutStore;

 const dorntuseEffect = async () => {
    const data = await store.getCategories();
    return data;
}
  
  

  return (
    <>
    <Button onClick={dorntuseEffect}>GET</Button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}/>
          {/* <Route path="/" element={<Categories />} /> */}
          <Route path="cheakyShop/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="cheakyShop/signIn" element={<Login />}  />
          <Route path="cheakyShop/signUp" element={<Registration />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
});

export default DefaultLayout;
