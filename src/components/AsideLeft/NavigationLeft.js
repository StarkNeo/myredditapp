import React from "react";
import { useState } from "react";
import { Search } from "../Search";

export const NavAsideLeft = () => {
    const [topic, setTopic]= useState('');

    const handleClick=(e)=>{
        console.log(e.target.innerHTML);
        setTopic(e.target.innerHTML);
    }
    console.log(topic);
    return (
        <section id="aside-left">
            <ul>
                
                <li onClick={handleClick}>Popular</li>
            </ul>
            
            <legend>TOPICS</legend>
            <ul>
                <li key="Gaming" onClick={handleClick}>Gaming</li>
                <li key="Sports" onClick={handleClick}>Sports</li>
                <li key="Business" onClick={handleClick}>Business</li>
                <li key='Crypto' onClick={handleClick}>Crypto</li>
                <li key='Television' onClick={handleClick}>Television</li>
                <li key='Celebrity' onClick={handleClick}>Celebrity</li>
            </ul>

        </section>

    )
}