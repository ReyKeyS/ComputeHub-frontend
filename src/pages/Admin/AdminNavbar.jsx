import * as React from 'react';
import Header from '../../components/Header';
import { useLoaderData, Outlet, Link } from "react-router-dom";
import NavbarAdmin from '../../components/NavbarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';


function Dashboard() {
    return (
        <>
      <div className="grid grid-cols-4 overflow-hidden">
        <NavbarAdmin />
        <div className="col-span-3 w-full h-screen bg-abu-gelap">
          <HeaderAdmin/>
          <div className="kananbawah h-screen overflow-scroll">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
    )
}

export default Dashboard