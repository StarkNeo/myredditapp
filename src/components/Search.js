import React from "react";
import lupa from '../Assets/icon-search.svg';
import { useState } from "react";
import { search } from "../services/apiconnect";

export const Search=()=>{
    const [words, setWords]= useState('')

    const handleClick = ()=>{
        search(words);
    }

    const handleChange =(e)=>{
        console.log(e.target.value)
        setWords(e.target.value)
    }
    return (
        <>
        <div id="search-bar">
        <img className="lupa" src={lupa} onClick={handleClick} />
        <input className="search-btn" type="search" placeholder="Search Reddit" onChange={handleChange} value={words} />
        </div>
        </>
        
    )
}