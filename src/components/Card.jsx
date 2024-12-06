import React from "react";

export default function Card({ title, image, description, price, category }) {
    return (
        <>
      <div className="card" style={{width: "18rem"}} >
        <div className="card-header">
            <h4>{title}</h4>
            <span>{category} | {price}</span>
        </div>
        {/*linter memastikan setiap tag ada penutupnya harus ditambah */}
        <img src={image} className="card-img-top w-50 s-block m-auto" alt="..." />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
    )
}