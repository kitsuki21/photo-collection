import React from "react";
import cl from "../collection/Collection.module.css";

const Collection = ({ name, images }) => {
  return (
    <div className={cl.collection}>
      <div>
        <img className={cl.mainPhoto} src={images[0]} alt="" />
      </div>
      <div className={cl.listPhoto}>
        <img className={cl.img} src={images[1]} alt="" />
        <img className={cl.img} src={images[2]} alt="" />
        <img className={cl.img} src={images[3]} alt="" />
      </div>
      <p className={cl.p}>{name}</p>
    </div>
  );
};

export default Collection;
