"use client";

import { useState } from "react";
import Modals from "../web/Modals";
import ModalCek1 from "../web/modals/ModalCek1";


const UserPage = () => {


    const [modals, setModals] = useState(false);
    const modalsHide = () =>{
        setModals(!modals);
    }
  return (
   <>
    USER PAGE 
    <Modals status={modals} hideModal={modalsHide}>
        <ModalCek1 />
    </Modals>
    <button className="p-2 m-2 bg-slate-300 rounded-lg" onClick={modalsHide}>Modals User</button>
   </>
  )
}

export default UserPage