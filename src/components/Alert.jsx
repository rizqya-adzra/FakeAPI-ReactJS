import React from "react";

//({  }) di function disebut props yang berfungsi untuk mengambil data dari 
//parent nya / dari tempat dia dipanggil
export default function Alert({ message }) {
    return (
        <>
            <div className="alert alert-danger" role="alert">
                {message}
            </div>
        </>
    )
}