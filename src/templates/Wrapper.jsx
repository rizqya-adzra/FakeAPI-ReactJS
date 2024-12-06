import React from "react";
import Navbar from "../components/Navbar";

export default function Wrapper({ children }) {
    return (
        <>
            <Navbar></Navbar>
            {/* menyiapkan tempat untuk component yang akan berubah ubah tiap halamannya
            , misal ketikaproduct/new munculnya form, ketika home munculnya card dsb */}
            <section>{children}</section>
        </>
    )
}