import React, { useState, useEffect } from 'react';
import { useLoaderData, Outlet, Link, useNavigate } from "react-router-dom";
import client from '../../services/client'
import Header from '../../components/Header';
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';

function AdminNavbar() {
  const navigate = useNavigate()

  useEffect(()=>{
    if (localStorage.getItem('user_token')){
      client.get("/users/detail", {
        headers: {"Authorization": "Bearer " + localStorage.getItem('user_token')}
      }).then(async (res)=>{
        if (res.data.role == 1) {
          navigate('/')
        }
      }).catch((err)=>{console.log(err)});
    }else{
      navigate("/login")
    }
  }, [])

  return (
      <>
    <div className="grid grid-cols-4 overflow-hidden">
      <NavbarAdmin />
      <div className="col-span-3 w-full h-screen bg-abu-gelap">
        <HeaderAdmin/>
        <div className="h-full overflow-y-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  </>
  )
}

export default AdminNavbar