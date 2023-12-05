import React, { useState, useEffect } from 'react';
import client from '../../services/client'

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import BuildComp from '../../components/BuildComp';

function Build(){
    return(
        <>
            <Header/>
                <div className="py-10 px-20 flex flex-col">
                    <span className="text-5xl font-bold mb-6">Build Your PC</span>
                    <div className="w-full bg-abu-gelap rounded-2xl">
                        <div className="px-14 py-10">
                            
                            <BuildComp type="Processor" />
                            <BuildComp type="Motherboard"  />
                            <BuildComp type="VGA"  />
                            <BuildComp type="RAM"  />
                            <BuildComp type="PSU"  />
                            <BuildComp type="SSD"  />

                            <BuildComp type="HDD"  />
                            <BuildComp type="Casing"  />
                            <BuildComp type="Cooling"  />
                            <BuildComp type="Monitor"  />
                            <BuildComp type="Keyboard"  />
                            <BuildComp type="Mouse"  />

                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
export default Build