import React from "react";
import lupa from '../Assets/icon-search.svg';

export const Search=()=>{
    return (
        <>
        <div id="search-bar">
        <img className="lupa" src={lupa} />
        <input className="search-btn" type="search" placeholder="Search Reddit" />
        </div>
        </>
        
    )
}