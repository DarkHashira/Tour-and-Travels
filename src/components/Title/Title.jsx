import React from "react";
import './Title.css'; // Assuming you have a CSS file for styling
const img = 'images/new.png';
const Title = () =>{
    return(
        <>
            <div className="title">
                <div className="logo">
                    <img src={img} alt={img} height={'130px'} width={'130px'}></img>
                </div>
                <div className="org_name">
                    <h1>One Piece</h1>
                    <h2>Tour & Travels Agency</h2>
                    <span><b>Address</b> : Mathurapur , West-Bengal , Pin:743354 </span>
                </div>
            </div>
        </>
    )
}
export default Title;